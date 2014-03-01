var dataset = [];
d3.csv("Facebook_Global_Government_Requests_2013_Jan-June.csv", function(data) 
{
	dataset=data
	for (var i = data.length - 1; i >= 0; i--) 
	{
		dataset[i]["Total Requests"] = +(dataset[i]["Total Requests"].replace(',',''))
		dataset[i]["Users / Accounts requested"] = +(dataset[i]["Users / Accounts requested"].replace(',',''))
		dataset[i]["Percentage of requests where some data produced"] = +dataset[i]["Percentage of requests where some data produced"]
	};
});

var margin = {top: 20, right: 20, bottom: 30, left: 50},
	width = w - margin.left - margin.right,
	height = h - margin.top - margin.bottom;


d3.select("#title")[0][0].innerHTML = '% requests where data was produced'

var w = $("#plot").innerWidth();
var h = $("#plot").innerHeight();

var svg = d3.select("#plot").append("svg:svg")
	.attr("width", w)
	.attr("height", h)
	.style("pointer-events", "all")
	.on("load",ShowData)
	.on("click",NextData)
	.on("mousemove",showVal);


svg.append("text")
		.attr("x",200)
		.attr("y",100)
		.attr('id','country')
		.text("country")
		.attr("fill","#222")
		.attr("font-family","'Raleway', sans-serif;")
		.attr("font-size", "20px")
		.attr("text-anchor","right");



function showVal()
	{
		m = d3.mouse(this);
		for (var i = dataset.length - 1; i >= 0; i--) 
		{
				d3.select("#point")
				.text(dataset[i]["country"])
		};
		};



window.data = 'uPerA'
function ShowData()
{
	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x",function(d,i){return(50+i*((w-100-71*2)/71+2))})
		.attr("y",function(d,i){return(h-margin.top-percentHeight(d))})
		.attr("width",(w-80-71*2)/71)
		.attr("height",function(d){return(percentHeight(d))})
		.attr("fill","#46629E")
		.append("svg:title")
          .text(function(d, i) {return(d["Country"])});
}

var pScale = d3.scale.linear()
	.domain([0,100])
	.range([h-margin.top,margin.bottom])

var tScale = d3.scale.linear()
	.domain([0,11500])
	.range([h-margin.top,margin.bottom])

var uPaScale = d3.scale.linear()
	.domain([0,20500])
	.range([h-margin.top,margin.bottom])

yAxis = d3.svg.axis().scale(pScale).ticks(4).tickSize(1).orient("left").tickPadding(8);

svg.append("g")
	.attr("class", "y axis")
	.attr("id",'axis')
	.transition(1000)
	.attr("transform", "translate(" + 45 + ",0)")
	.call(yAxis);


function percentHeight(d)
{
	dat = d["Percentage of requests where some data produced"];
	dat = (dat/100)*(h-margin.top-margin.bottom)
	return(dat)
};
function uPerAHeight(d)
{
	dat = d["Users / Accounts requested"];
	dat = (dat/20500)*(h-margin.top-margin.bottom)
	return(dat)
};

function total(d)
{
	dat = d["Total Requests"];
	dat = (dat/11500)*(h-margin.top-margin.bottom)
	return(dat)
};



function NextData()
{
	if (window.data == 'percent')
	{
		d3.select("#title")[0][0].innerHTML = '% requests where data was produced'
		window.data ='uPerA'
		svg.selectAll("rect")
		.transition()
		.duration(1000)
		.attr("y",function(d,i){return(h-margin.top-percentHeight(d))})
		.attr("height",function(d,i){return(percentHeight(d))});

		yAxis = d3.svg.axis().scale(pScale).ticks(4).tickSize(1).orient("left").tickPadding(8);

		d3.select("#axis")
			.transition(1000)
			.call(yAxis);

		return(null)
	};
	
	if (window.data == 'uPerA')
	{
		d3.select("#title")[0][0].innerHTML = 'Users / Accounts requested'
		window.data = 'total'
		svg.selectAll("rect")
		.transition()
		.duration(1000)
		.attr("y",function(d,i){return(h-margin.top-uPerAHeight(d))})
		.attr("height",function(d,i){return(uPerAHeight(d))});

		yAxis = d3.svg.axis().scale(uPaScale).ticks(4).tickSize(1).orient("left").tickPadding(8);

		d3.select("#axis")
			.transition(1000)
			.call(yAxis);


		return(null)
	};

	if (window.data == 'total')
	{
		d3.select("#title")[0][0].innerHTML = 'Total Requests'
		window.data = 'percent'
		svg.selectAll("rect")
		.transition()
		.duration(1000)
		.attr("y",function(d,i){return(h-margin.top-total(d))})
		.attr("height",function(d,i){return(total(d))});

	

		yAxis = d3.svg.axis().scale(tScale).ticks(6).tickSize(1).orient("left").tickPadding(8);

		d3.select("#axis")
			.transition(1000)
			.call(yAxis);
		return(null)
	}
}

