var contact_circle = $('#contact_circle')[0],
contact            = $('#contact')[0],
section            = $('#section')[0],
articles           = $('#articles')[0],
summary            = $('#Summary_button')[0],
Education          = $('#Education_button')[0],
Experience         = $('#Experience_button')[0],
Skills             = $('#Skills_button')[0],
hide               = $("#contact_hide")[0];
summary.onclick    = function(){move_article('-100');return false;}
Education.onclick  = function(){move_article('-188');return false;}
Experience.onclick = function(){move_article('-276');return false;}
Skills.onclick     = function(){move_article('-364');return false;}
// $('#Summary')[0].onclick    = function(){move_article('-100');return false;}
// $('#Education')[0].onclick  = function(){move_article('-188');return false;}
// $('#Experience')[0].onclick = function(){move_article('-276');return false;}
// $('#Skills')[0].onclick     = function(){move_article('-364');return false;}


function move_article(n)
{
	articles.style.left                 = n+'%';
	contact_circle.style.height         = '0px';
	contact_circle.style.width          = '0px';
	contact_circle.style.padding        = '0px';
	contact_circle.style.border         = '1px dashed rgba(0,0,0,0)';
	// $( "#master_div" ).animate({scrollTop: 0}, 800);
}

hide.onclick = function()
{
	contact_circle.style.height  = '0px';
	contact_circle.style.width   = '0px';
	contact_circle.style.padding = '0px';
	contact_circle.style.border  = '1px dashed rgba(0,0,0,0)';
}

contact.onclick = function()
{
	move_article('0')
	contact_circle.style.height         = '250px';
	contact_circle.style.width          = '250px';
	contact_circle.style.padding        = '20px';
	contact_circle.style.border         = '1px dashed rgb(255,255,255)';
}

$('#master_div')[0].onscroll = function()
{
	var w = window.innerWidth;
	if (w >= 910)
	{
		if ($('#master_div')[0].scrollTop >= 200)
		{
			section.style.position  = 'fixed';
			section.style.top       = '0px'
			section.style.boxShadow = '0 0 20px #222'
			articles.style.top      = String($('#section').height()+20)+'px';
		}

		else
		{
			section.style.position  = 'relative'
			section.style.boxShadow = '0 0 0px #222'
			articles.style.top      = '0px';
		}
	};
}