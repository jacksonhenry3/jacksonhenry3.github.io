var dataset = [];

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

var w = d3.select("#plot").innerWidth
var h = d3.select("#plot").innerWidth
var svg = d3.select("#plot").append("svg:svg")
	.attr("width", w)
	.attr("height", h)
	.style("pointer-events", "all")
	.style("background-color",'white')
	.on("mousemove",showVal)
	.on('load',plot);

Xaxis()
Yaxis()
plot()
vals = [-100,-75,-50,-25,0,25,50,75,100,125]
svg.selectAll("text")
	.data(vals)
	.enter()
	.append("text")
	.attr("x",-100)
	.attr("y",function(i){return(cy(i));})
	.text(function(i){return(i);})
	.attr("fill","#222")
	.attr("font-family","'Raleway', sans-serif;")
	.attr("font-size", "20px")
	.attr("text-anchor","right")
	.transition()
	.delay(function(i) { return i * 10; })
	.attr("x",0);

function plot()
{
	svg.selectAll("line")
	.data(dataset)
	.enter()
	.append("line")
	.attr("x1",function(d){return(cx(d["year"]));})
	.attr("x2",function(d){return(cx(d["year"]));})
	.attr("y1",function(d){return(cy(d["GMSL"])-radius(d)+h+200);})
	.attr("y2",function(d){return(cy(d["GMSL"])+radius(d)+h+200);})

	.attr("stroke","#4682B4")
	.transition()
	.delay(function(d, i) { return i * .5; })
	.attr("y1",function(d){return(cy(d["GMSL"])-radius(d));})
	.attr("y2",function(d){return(cy(d["GMSL"])+radius(d));})
};
function Xaxis()
{
	svg.append("line")
	.attr("x1",40)
	.attr("x2",w+10)
	.attr("y1",cy(0))
	.attr("y2",cy(0))
	.attr("stroke","#222")
};

function Yaxis()
{
	svg.append("line")
	.attr("x1",40)
	.attr("x2",40)
	.attr("y1",-10)
	.attr("y2",h+10)
	.attr("stroke","#222")
};
function slowDown(v)
{
	val = window.setTimeout(function(){return(v)},200)
	return(val)
};

function cx(v)
{  
	var body = d3.select("body");
    var svg = body.select("svg");
    w = svg.style("width");
	var x = 40+(v-1870.0417)/(2001.9583-1870.0417)*(w-40);
	return(x)
};

function cy(v)
{
		var body = d3.select("body");
	    var svg = body.select("svg");
	    h = svg.style("height");
		var y = (-(h-50)*((v+100)/(220))+(h-25));
	return(y)
};
function radius(d)
{		
	var r = (h-50)*d["error"]/220;
	return(r)
};
svg.append("text")
	.attr("x",100)
	.attr("y",100)
	.attr('id','point')
	.text("(date,mean sea level)")
	.attr("fill","#222")
	.attr("font-family","'Raleway', sans-serif;")
	.attr("font-size", "20px")
	.attr("text-anchor","right");

function showVal()
{
	m = d3.mouse(this);
	if (m[0]>40)
	{
	year = (m[0] - 40)/(w - 40)*(2001.9583 - 1870.0417) + 1870.0417
	for (var i = dataset.length - 1; i >= 0; i--) 
	{
		y = dataset[i]["year"]
		if (Math.abs(year-y)<.05)
		{
			disp_y = (y-1970)*3.171*Math.pow(10,10)
			d = new Date(disp_y)
			date = d.toDateString()
			console.log(date)
			day = date.substring(0,3)
			dayN = date.substring(8,10);
			date = date.replace(dayN,"")
			console.log(date)
			date = date.replace(day,"")
			console.log(date)

			
			d3.select("#point")
			.text(date+' , '+String(dataset[i]["GMSL"])+'\xB1'+String(dataset[i]["error"])+' mm')
		}
	};
	};

	
};

