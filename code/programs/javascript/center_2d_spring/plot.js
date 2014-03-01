data = []
var w = $("#plot").innerWidth();
var h = $("#plot").innerHeight();
	var svg = d3.select("#plot").append("svg:svg")
	.attr("width", w)
	.attr("height", h)
	.style("pointer-events", "all")
	.style("background-color",'#222')
	.on("load",spring())
	.on("click", redraw);
		 
	  
		
function redraw(){
	var m = d3.svg.mouse(this);
	data.push([m[0],m[1],0,0])
	svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr("cx",function(d){d[0]=m[0];return(m[0])})
	.attr("cy",function(d){d[1]=m[1];return(m[1])})
	.attr("r",5)
	.attr("fill",'#'+Math.floor(Math.random()*16777215).toString(16))
}

function spring(){
	kx=5;
	ky=2;
	m=1;
	t=.005;
	setInterval(
	function(){
		svg.selectAll("circle")
		.attr("cx",function(d){
			F = -kx*(d[0]-w/2)
			a = (F)
			d[2] = a*t+d[2]
			d[0] = d[2]*t+d[0]
			return (d[0])})

		.attr("cy",function(d){
			F = -ky*(d[1]-h/2)
			a = (F)
			d[3] = a*t+d[3]
			d[1] = d[3]*t+d[1]
			return (d[1])})
		},1);
		;}