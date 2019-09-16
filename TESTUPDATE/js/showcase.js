object = document.getElementsByClassName('item')

for (var i = object.length - 1; i >= 0; i--) {
	object[i].onmouseenter = function()
	{
		for (var i = object.length - 1; i >= 0; i--)
		{
		object[i].classList.toggle("unfocussed")
		object[i].classList.toggle("neutral")
		}
		this.classList.toggle("unfocussed")
		this.classList.toggle("focussed");
	};
}

for (var i = object.length - 1; i >= 0; i--) {
	object[i].onmouseleave = function()
	{
		for (var i = object.length - 1; i >= 0; i--)
		{
		object[i].classList.toggle("unfocussed")
		object[i].classList.toggle("neutral")
		}
		this.classList.toggle("unfocussed")
		this.classList.toggle("focussed");
	};
}
