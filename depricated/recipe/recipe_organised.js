function __init__(){

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
	
	//when you click on the back button it will take you to the main list
	back.onclick         = function(){document.body.style.left = '0%';};
		
	//get all the recipes from the json file
	$.getJSON("recipes.json", function(recipes) {
		//populate page with recipes
		for (var recipe_name in recipes) {
			var span       = document.createElement("span");
			span.innerHTML = recipe_name;
			span.className = 'recipee';
			span.onclick   = function(){food_page(recipes[recipe_name])};
			folder.appendChild(span)
		}
	}

	//add functionality to the search
	document.getElementById('filter-form').onsubmit = search_for()
}

function search_for() {
	folder.innerHTML = ''
	for (var key in recipes) 
	{
		ingredients = recipes[key][0]
		for (var i = 0; i < ingredients.length; i++)
		{
			console.log(ingredients[i],filter.value)
			if (ingredients[i].indexOf(filter.value) != -1 || key.indexOf(filter.value) != -1)
			{
				console.log("YAY")
				var span = document.createElement("span");
				span.innerHTML = key;
				span.className  = 'recipee';
				span.onclick = food_page
				folder.appendChild(span)
				break
			};
		};
	};
	return false
};

function generate_food_page (recipe) {
	var img = recipe['img'];
	generate_ingredients_list(recipe,ingredients_div)
	generate_instructions_list(recipe,instructions_div)
	document.body.style.backgroundImage= "url('"+img+"')"
});

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
	food.style.left = '0px';
	food.innerHTML = "<div id = 'back' onclick = 'list_page()'>&#8592</div><h1>"+this.innerHTML+'</h1>';
	generate_food_page(recipe);
	document.body.style.left = '-100%';
};

function list_page () {
	food.style.left = '100%';
	document.body.style.left = '0px';
}