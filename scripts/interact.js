function showHide(elem,siblings)
{
  console.log(elem)
	if (elem.className.indexOf('hidden') != -1)
	{
		elem.className = elem.className.replace("hidden","")

    elem.style.opacity = 0;
    window.setTimeout(function(){elem.style.opacity = 1;},10) 
	}

	else
	{
		elem.className+=' hidden'
	}
  for (var i = siblings.length - 1; i >= 0; i--) {
    if (siblings[i].className.indexOf('hidden') == -1)
    {
      siblings[i].className+=' hidden'
    }
  };

}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 1000);
        return false;
      }
    }
  });
});

if (window.innerWidth>650)
{
  document.onmousemove = function(e)
  {
    slide(e,'webProjects')
    slide(e,'bestProjects')
    slide(e,'researchProjects')
  }
}
function slide(e,elemName)
{
  elem = document.getElementById(elemName)
  slider = elem.children[0];
  var left = e.pageX - elem.offsetLeft;
  var top  = e.pageY - elem.offsetTop;
  if (top>0 && top<elem.clientHeight)
  {
      width = document.body.clientWidth;
      n = slider.children.length
      L = n*400;
      slider.style.left = -((L/2-width/2)+L/width*(left-width/2))+'px'
  }
}