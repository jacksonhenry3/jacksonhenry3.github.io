Number.prototype.mod = function(n) {
return ((this%n)+n)%n;
}

var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}

preload(
	"1.JPG",
	"2.JPG",
	"3.JPG",
	"4.JPG",
	"5.JPG",
	"6.JPG",
	"7.JPG")


date = new Date()

numDays = 30

UntillDate = new Date(1404500000000)
UntillDate = new Date(2015, 11, 26, 0, 0, 0, 0)


millSec = (UntillDate.getMilliseconds()-date.getMilliseconds()).mod(1000)
seconds = (UntillDate.getSeconds()-date.getSeconds()).mod(60)*999+millSec
minutes = (UntillDate.getMinutes()-date.getMinutes()).mod(60)*59*999+seconds
hours   = (UntillDate.getHours()-date.getHours()).mod(24)*59*59*999+minutes
days    = (UntillDate.getDate()-date.getDate()).mod(numDays)*23*59*59*999+hours
months  = (UntillDate.getMonth()-date.getMonth()).mod(12)*numDays*24*59*59*999+days
years   = (UntillDate.getFullYear()-date.getFullYear()).mod(1)*12*numDays*24*59*59*999+days
data = 
	[
		millSec/999,
		seconds/(59*999),
		minutes/(59*59*999),
		hours/(24*59*59*999),
		days/(numDays*24*59*59*999),
		months/(12*numDays*24*59*59*999),
		years/(10*12*numDays*24*59*59*999)
	]


millisecArc = d3.svg.arc()
	.innerRadius(130)
	.outerRadius(150)
	.startAngle(0)
	.endAngle(function(d){return(d)})

secArc = d3.svg.arc()
	.innerRadius(110)
	.outerRadius(130.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
minArc = d3.svg.arc()
	.innerRadius(90)
	.outerRadius(110.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
hrArc = d3.svg.arc()
	.innerRadius(70)
	.outerRadius(90.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
dayArc = d3.svg.arc()
	.innerRadius(50)
	.outerRadius(70.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
monthArc = d3.svg.arc()
	.innerRadius(30)
	.outerRadius(50.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
yearArc = d3.svg.arc()
	.innerRadius(0)
	.outerRadius(30.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})





function newData(d,i)
	{
		if (i==0) {arc = millisecArc}
		else if (i==1) {arc = secArc}
		else if (i==2) {arc = minArc}
		else if (i ==3) {arc = hrArc}
		else if (i ==4) {arc = dayArc}
		else if (i ==5) {arc = monthArc}
		else if (i ==6) {arc = yearArc};
		a  = d*2*3.1415926
		return(arc(a))
	}


container = d3.select("#countdown")
svg = d3.select("#countdown").append("svg")// add the svg element to body
		.attr("width" , 300)
		.attr("height", 300);

svg.selectAll("path")
	.data(data)
	.enter()	
	.append("path")
	.attr('class',function(d,i){return(i)})
    .attr("transform", "translate(150,150)")
    .attr("d", function(d,i){return(newData(d,i))})
    .attr('fill','rgba(220,220,220,.2)');
    // .attr('fill',function(d,i){console.log(d);return('rgba(0,0,'+String(d*255)+',.5)')});

function go()
{
	date = new Date()
	numDays = 30




if (date.getTime() >= UntillDate.getTime())
	{
		console.log(date)
		date = new Date(1404500000000)
		document.getElementById('heart').style.opacity = '.5';
		document.getElementById('countdown').style.opacity = '0';
	}

millSec = (UntillDate.getMilliseconds()-date.getMilliseconds()).mod(1000)
seconds = (UntillDate.getSeconds()-date.getSeconds()).mod(60)*999+millSec
minutes = (UntillDate.getMinutes()-date.getMinutes()).mod(60)*59*999+seconds
hours   = (UntillDate.getHours()-date.getHours()).mod(24)*59*59*999+minutes
days    = (UntillDate.getDate()-date.getDate()).mod(numDays)*23*59*59*999+hours
months  = (UntillDate.getMonth()-date.getMonth()).mod(12)*numDays*24*59*59*999+days
years   = (UntillDate.getFullYear()-date.getFullYear()).mod(1)*12*numDays*24*59*59*999+days
	data = 
		[
			-1+millSec/999,
			-1+seconds/(59*999),
			-1+minutes/(59*59*999),
			-1+hours/(24*59*59*999),
			-1+days/(numDays*24*59*59*999),
			-1+months/(12*numDays*24*59*59*999),
			-1+years/(12*numDays*24*59*59*999)
		]




	svg.selectAll("path")
		.data(data)
		// .transition()
		// .duration(300)
	    .attr("d", function(d,i){return(newData(d,i))})
	    .attr('fill','rgba(230,230,230,.4)');
	    // .attr('fill',function(d,i){a = 'rgba(0,0,'+String(Math.floor(-d*255))+',.5)';console.log(a);return(a);});
};
function changePic()
{
		N = Math.ceil(Math.random()*7)	
		document.body.style.backgroundImage = "url('"+N+".JPG')"
}
changePic()
window.setInterval(go,5 )
window.setInterval(changePic,10000)