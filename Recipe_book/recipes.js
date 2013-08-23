//all variables needed to trasvers dom
//list of recipes
var folder           = document.getElementById('recipes');
//button to take you back to list
var back             = document.getElementById('back');
//div with list of ingredients in it
var ingredients_div  = document.getElementById('ingredients');
//title of food page
var food_title       = document.getElementById('food');
//section of food page with cooking instructions
var instructions_div = document.getElementById('instructions_text');
var filter           = document.getElementById('filter');
var filter_form      = document.getElementById('filter-form');

//get all the recipes from the json file
$.getJSON("data/recipes.json", function(recipes,folder) {
	window.recipes = recipes;
	//populate page with recipes
	for (var recipe_name in recipes) {
		var span             = document.createElement("span");
		span.innerHTML       = recipe_name;
		span.className       = 'recipee';
		span.onclick         = food_page;
		document.getElementById('recipes').appendChild(span);

	}

	//add functionality to the search
	filter_form.onsubmit = function(){search_for(recipes);return false;};

	var rand = Math.floor((Math.random()*Object.keys(recipes).length));



	//preload all images for speed
	var i = 0;
	for (var recipe in window.recipes){
		src = recipes[recipe]['image']
		var im = new Image();
		im.src = src;

		//choose random initial background image
		if (i == rand){
			document.body.style.backgroundImage = "url('"+src+"')";
		}
		i++
}

});



//when you click on the back button it will take you to the main list
back.onclick         = function(){document.body.style.left = '0%';};


function search_for(recipes) {
	folder.innerHTML = ''
	console.log(recipes)
	for (var key in recipes) 
	{
		ingredients = recipes[key]['ingredients']
		for (var i = 0; i < ingredients.length; i++)
		{
			if (ingredients[i].indexOf(filter.value) != -1 || key.indexOf(filter.value) != -1)
			{
				var span = document.createElement("span");
				span.innerHTML = key;
				span.className  = 'recipee';
				span.onclick = food_page
				folder.appendChild(span)
				break
			};
		};
	};
	return false;
};

function generate_food_page (recipe) {
	var img = recipe['image'];
	generate_ingredients_list(recipe,ingredients_div)
	generate_instructions_list(recipe,instructions_div)
	document.body.style.backgroundImage= "url('"+img+"')"
};

function generate_ingredients_list (recipe,ingredients_div) {
	var ingredients = recipe['ingredients'];
	ingredients_div.innerHTML = "<h2>Ingredients</h2>"
	ingredient_list ="<ul>";
	for (var i = 0; i < ingredients.length; i++){
		ingredient_list+= '<li>'+ingredients[i]+'</li>'
	};
	ingredient_list+='</ul>'
	ingredients_div.innerHTML += ingredient_list
};

function generate_instructions_list (recipe,instructions_div) {
	var instructions = recipe['instructions'];
	instructions_div.innerHTML = "<h2>instructions</h2>"
	instruction_list ="<ol>";
	for (var i = 0; i < instructions.length; i++){
		instruction_list+= '<li>'+instructions[i]+'</li>'
	};
	instruction_list+='</ol>'
	instructions_div.innerHTML = instruction_list
};

function food_page(){
	generate_food_page(recipes[this.innerHTML]);
	food.style.left = '0px';
	document.body.style.left = '-100%';
	food.innerHTML = "<div id = 'back' onclick = 'list_page()'>&#8592</div><h1>"+this.innerHTML+'</h1>';
};

function list_page () {
	food.style.left = '100%';
	document.body.style.left = '0px';
}