Number.prototype.mod = function(n) {
return ((this%n)+n)%n;
}

date = new Date()
date = new Date(1404500000000)
numDays = 31

UntillDate = new Date(1404500000000)


millSec = (UntillDate.getMilliseconds()-date.getMilliseconds()).mod(1000)
seconds = (UntillDate.getSeconds()-date.getSeconds()).mod(60)*999+millSec

minutes = (UntillDate.getMinutes()-date.getMinutes()).mod(60)*59*999+seconds

hours   = (UntillDate.getHours()-date.getHours()).mod(24)*59*59*999+minutes

days    = (UntillDate.getDate()-date.getDate()).mod(numDays)*23*59*59*999+hours

months  = (UntillDate.getMonth()-date.getMonth()).mod(12)*numDays*24*59*59*999+days
mth = (UntillDate.getMonth()-date.getMonth()).mod(12)
years   = (UntillDate.getFullYear()-date.getFullYear()).mod(1)*12*numDays*24*59*59*999+days
yrs =  (UntillDate.getFullYear()-date.getFullYear()).mod(1)
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
	.innerRadius(120)
	.outerRadius(140.25)
	.startAngle(0)
	.endAngle(function(d){return(d)})

secArc = d3.svg.arc()
	.innerRadius(100)
	.outerRadius(120.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
minArc = d3.svg.arc()
	.innerRadius(80)
	.outerRadius(100.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
hrArc = d3.svg.arc()
	.innerRadius(60)
	.outerRadius(80.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
dayArc = d3.svg.arc()
	.innerRadius(40)
	.outerRadius(60.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
monthArc = d3.svg.arc()
	.innerRadius(20)
	.outerRadius(40.1)
	.startAngle(0)
	.endAngle(function(d){return(d)})
yearArc = d3.svg.arc()
	.innerRadius(0)
	.outerRadius(20.1)
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
    .attr('fill','rgba(220,50,100,.5)');

function go()
{
	date = new Date()
	// date = new Date(1404500000000+1000)
	if (date.getTime() >= 1404500000000)
	{
		date = new Date(1404500000000)
		document.getElementById('heart').style.opacity = '1';
		document.getElementById('countdown').style.opacity = '0';
	}
	

	numDays = 31

	// UntillDate = new Date(1404500000000-1000*60*60*24*30)


millSec = (UntillDate.getMilliseconds()-date.getMilliseconds()).mod(1000)
seconds = (UntillDate.getSeconds()-date.getSeconds()).mod(59)*999+millSec
minutes = (UntillDate.getMinutes()-date.getMinutes()).mod(59)*59*999+seconds
hours   = (UntillDate.getHours()- UntillDate.getHours()).mod(23)*59*59*999+minutes
days    = (UntillDate.getDate()-date.getDate()).mod(numDays-1)*23*59*59*999+hours
months  = (UntillDate.getMonth()-date.getMonth()).mod(11)*numDays*24*59*59*999+days
years   = (UntillDate.getFullYear()-date.getFullYear()).mod(1)*12*numDays*24*59*59*999+months


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
	    .attr("d", function(d,i){return(newData(d,i))});
};

window.setInterval(go,5 )
