var dataset = [];
console.log('working')

d3.csv("GMSL.csv", function(data) 
{
	dataset=data
	for (var i = data.length - 1; i >= 0; i--) 
	{
		dataset[i]["year"] = +dataset[i]["year"]
		dataset[i]["GMSL"] = +dataset[i]["GMSL"]
		dataset[i]["error"] = +dataset[i]["error"]
	};
});

var w = window.innerWidth,h=500;
var svg = d3.select("body").append("svg:svg")
	.attr("width", w)
	.attr("height", h)
	.style("pointer-events", "all")
	.style("background-color",'#EEE');

document.onload = function(){console.log('me too');plot_data();Xaxis();Yaxis();}

function plot_data()
{
	svg.selectAll("line")
	.data(dataset)
	.enter()
	.append("line")
	.attr("x1",function(d){return(cx(d));})
	.attr("x2",function(d){return(cx(d));})
	.attr("y1",function(d){return(cy(d)-r(d));})
	.attr("y2",function(d){return(cy(d)+r(d));})
	.attr("stroke","#4682B4");
}
function Xaxis()
{
	svg.append("line")
	.attr("x1",0)
	.attr("x2",w)
	.attr("y1",h/2)
	.attr("y2",h/2)
	.attr("stroke","#222")
}

function Yaxis()
{
	svg.append("line")
	.attr("x1",w/2)
	.attr("x2",w/2)
	.attr("y1",0)
	.attr("y2",h)
	.attr("stroke","#222")
}

function cx(d)
{
	var x = (d["year"]-1870.0417)/(2001.9583-1870.0417)*w;
	return(x)
}

function cy(d)
{
	var y = (-h*((d["GMSL"]+100)/(220))+h);
	return(y)
}
function r(d)
{
	var r = h*d["error"]/220;
	return(r)
}