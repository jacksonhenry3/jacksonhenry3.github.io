var articles     = $('#articles')[0],
	pythonB      = $('#python_button')[0],
	javascriptB  = $('#javascript_button')[0],
	MathematicaB = $('#mathematica_button')[0],
	categories   = $('#categories')[0],
	back         = $('#back')[0],
	forward      = $('#forward')[0];

categories.style.left = '100px'
pythonB.onclick      = function(){move_article('0');categories.style.left = '100px';return false}
javascriptB.onclick  = function(){move_article('-100');categories.style.left = '0px';return false}
MathematicaB.onclick = function(){move_article('-200');categories.style.left = '-100px';return false}


function move_article(n)
{
	articles.style.left = n+'%';
}

function nav(direction)
{
	var c_l = categories.style.left,
		a_l = articles.style.left; 
	if (direction === 'left')
	{
		if (c_l === '0px') 
		{
			categories.style.left = '100px'
			move_article('0')
		};

		if (c_l === '-100px') 
		{
			categories.style.left = '0px'
			move_article('-100')
		};
	};

	if (direction === 'right')
	{
		if (c_l === '100px') 
		{
			categories.style.left = '0px'
			move_article('-100')
		};

		if (c_l === '0px') 
		{
			categories.style.left = '-100px'
			move_article('-200')
		};
	};
}

back.onclick    = function(){nav('left')}
forward.onclick = function(){nav('right')}

if (window.innerWidth <500)
{
	$(".program").css("margin-left", "15px");
	$(".program").css("margin-right", "15px");
}