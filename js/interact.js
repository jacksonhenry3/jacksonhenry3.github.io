function art_func()
{
	tri.style.left    = '95px';
	h                 = art.clientHeight;
	card.style.height = String(h)+'px'
	art.style.top     = '0%';
	code.style.top    = '100%';
	science.style.top = '100%';
};

function code_func()
{
	tri.style.left    = '-95px';
	h                 = code.clientHeight;
	card.style.height = String(h)+'px'
	art.style.top     = '100%';
	code.style.top    = '0%';
	science.style.top = '100%';
};

function science_func()
{
	tri.style.left    = '0px';
	h                 = science.clientHeight;
	card.style.height = String(h)+'px'
	art.style.top     = '100%';
	code.style.top    = '100%';
	science.style.top = '0%';
};

function set_click_actions()
{
	tri     = document.getElementById('triangle');
	card    = document.getElementById('card');
	art     = document.getElementById('art');
	code    = document.getElementById('code');
	science = document.getElementById('science');
	document.getElementById('science_button').onclick = science_func;
	document.getElementById('art_button').onclick     = art_func;
	document.getElementById('code_button').onclick    = code_func;
	science_func()
};


