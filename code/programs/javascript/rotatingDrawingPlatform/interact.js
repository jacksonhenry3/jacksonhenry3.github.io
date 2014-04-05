//The data for our line
var lineData1 = [];
var lineData2 = [];

//This is the accessor function we talked about above
var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("basis");

svgWidth = 500
svgHeight = 500
//The SVG Container
var svgContainer = d3.select("#a").append("svg")
.attr("width", svgWidth)
.attr("height", svgHeight)
.on("ontouchstart" in document ? "touchmove" : "mousemove", addData);

//The line SVG Path we draw
var line1 = svgContainer.append("path")
.attr("d", lineFunction(lineData1))
.attr("stroke", "#EEE")
.attr("stroke-width", 2)
.attr("fill", "none");

var line2 = svgContainer.append("path")
.attr("d", lineFunction(lineData2))
.attr("stroke", "#EEE")
.attr("stroke-width", 2)
.attr("fill", "none");


function addData()
{
    // s = document.getElementById('a').children[0]
    var m = d3.mouse(svgContainer[0][0]);
    x = xScale.invert(m[0])
    y = yScale.invert(m[1])
    lineData1.push({x:x,y:y})

    // s = document.getElementById('a').children[0]
    // var m = d3.mouse(svgContainer[0][0]);
    x = -xScale.invert(m[0])
    y = yScale.invert(m[1])
    lineData2.push({x:x,y:y})
}

function twirl()
{

    for (var i = lineData1.length - 1; i >= 0; i--) {
    cartCoords = {x:lineData1[i].x,y:lineData1[i].y}
    polCoords  = cartToPol(cartCoords)
    polCoords.theta +=.03
    cartCoords = polToCart(polCoords)
    lineData1[i] = cartCoords
    };

line1.attr("d", lineFunction(toScreenCoords(lineData1)));

    for (var i = lineData2.length - 1; i >= 0; i--) {
    cartCoords = {x:lineData2[i].x,y:lineData2[i].y}
    polCoords  = cartToPol(cartCoords)
    polCoords.theta -=.03
    cartCoords = polToCart(polCoords)
    lineData2[i] = cartCoords
    };

line2.attr("d", lineFunction(toScreenCoords(lineData2)));
}


function polToCart(coordinates)
{
    r              = coordinates.r
    theta          = coordinates.theta
    x              = r*Math.cos(theta)
    y              = r*Math.sin(theta)
    newCoordinates = {x:x,y:y}
    return(newCoordinates)
}

function cartToPol(coordinates)
{
    x              = coordinates.x
    y              = coordinates.y
    r              = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    theta          = Math.atan2(y,x)
    newCoordinates = {r:r,theta:theta}
    return(newCoordinates)
}

function toScreenCoords(data)
{
    d = []
    for (var i = data.length - 1; i >= 0; i--) {
        d[i] = {x:xScale(data[i].x),y:yScale(data[i].y)}
    };
    return(d)
}

var xScale = d3.scale.linear()
    .domain([-svgWidth/2,svgWidth/2])
    .range([0,svgWidth])

var yScale = d3.scale.linear()
    .domain([-svgHeight/2,svgHeight/2])
    .range([svgHeight,0])


window.setInterval(twirl,10)