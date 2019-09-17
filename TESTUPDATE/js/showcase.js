

categories = ["Physics","Programming","Photography"]


for (var j = categories.length - 1; j >= 0; j--) {

		id = categories[j]
		showcase = document.getElementById(id).childNodes;
		console.log(showcase)
		for (var i = showcase.length - 1; i >= 0; i--)
		{
			showcase[i].onmouseenter = function()
			{

				for (var k = showcase.length - 1; k >= 0; k--)
				{
					console.log(showcase[k])
					if (showcase[k].classList.includes("item")) {
						console.log(showcase[k])
						showcase[k].classList.toggle("unfocussed")
						showcase[k].classList.toggle("neutral")

					}
				
				}
				this.classList.toggle("unfocussed")
				this.classList.toggle("focussed");
			};
	
			showcase[i].onmouseleave = function()
			{
				for (var l = showcase.length - 1; l >= 0; l--)
				{
					if (showcase[l].classList.includes("item")) {
						showcase[l].classList.toggle("unfocussed")
						showcase[l].classList.toggle("neutral")
					}
				}
				this.classList.toggle("unfocussed")
				this.classList.toggle("focussed");
			};
		}

}