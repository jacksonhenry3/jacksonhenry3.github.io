var dataset = [[1950,23.5],[1955,23.1],[1960,22.7],[1965,22.0],[1970,21.5],[1975,21.9],[1980,22.6],[1985,23.3],[1990,24.0],[1995,25.1],[2000,26.3],[2005,27.4],[2010,28.5]];
var w = $("#plot").innerWidth();
var h = $("#plot").innerHeight();

var margin = {top: 20, right: 20, bottom: 30, left: 50},
	width = w - margin.left - margin.right,
	height = h - margin.top - margin.bottom;

var svg = d3.select("#plot").append("svg:svg")
	.attr("width", w)
	.attr("height", h)
	.style("background-color",'white')
	.style("pointer-events", "all");

var XScale = d3.scale.linear()
	.domain([1950,2010])
	.range([margin.left,w-margin.right])

var YScale = d3.scale.linear()
	.domain([20,30])
	.range([h-margin.top,margin.bottom])


var line = d3.svg.line()
    .x(function(d) { return XScale(d[0]); })
    .y(function(d) { return YScale(d[1]); })
    .interpolate("monotone");

svg.append("path")
	.datum(dataset)
	.attr("class", "line")
	.attr("d", line)
	.attr("stroke", "#46629E")
	.attr("stroke-width", 2)
	.attr("fill", "none");

xAxis = d3.svg.axis().scale(XScale).tickSize(6).tickPadding(8).ticks(4).tickFormat(d3.format("0000"));
yAxis = d3.svg.axis().scale(YScale).ticks(5).tickSize(6).orient("left").tickPadding(8);

// Add the x-axis.
svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(-10," + height + ")")
	.call(xAxis);


  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(yAxis);

var dataset = [[1950,20.5],[1955,20.1],[1960,22.7],[1965,22.0],[1970,21.5],[1975,21.9],[1980,22.6],[1985,23.3],[1990,24.0],[1995,25.1],[2000,26.3],[2005,27.4],[2010,28.5]];
var line = d3.svg.line()
    .x(function(d) { return XScale(d[0]); })
    .y(function(d) { return YScale(d[1]); })
    .interpolate("monotone");

svg.select("path")
	.transition(1000)
	.attr("class", "line")
	.attr("d", line)
	.attr("stroke", "#46629E")
	.attr("stroke-width", 2)
	.attr("fill", "none");