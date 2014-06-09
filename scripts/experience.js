svgWidth = innerWidth-200;
if (window.innerWidth<650)
{
	svgWidth = innerWidth-20
}
svgHeight = 275;



data =  [
			// {
			// 	name:'Shutesburry Elementary',
			// 	time:[1998,2006],
			// 	shape:'triangle',
			// 	colour:'#B1C6BF'
		 // 	},
			// {
			// 	name:'ARMS',
			// 	time:[2006,2008],
			// 	shape:'triangle',
			// 	colour:'rgba(136,28,28,.7)'
			// },
			// {
			// 	id:'highSchool',
			// 	name:'ARHS',
			// 	time:[2008+8/12,2012+5/12],
			// 	shape:'triangle',
			// 	labelHeight:svgHeight-160,
			// 	colour:'rgba(143,25,25,.7)'
			// },
			{
				id:'CollegeSVG',
				name:'RIT',
				time:[2012+8/12,2014+5/12],
				shape:'triangle',
				labelHeight:svgHeight-180,
				colour:'rgba(243,110,33,.7)'
			},
			{
				id:'UMassInternship1SVG',
				name:'UMass internship',
				time:[2011,2012+5/12],
				shape:'square',
				labelHeight:svgHeight-240,
				colour:'rgba(136,28,28,.7)'
			},
			{
				id:'ConcordConsortium',
				name:'Concord Consortium',
				time:[2012+5.5/12,2012+8/12],
				shape:'square',
				labelHeight:svgHeight-200,
				colour:'rgba(248,166,21,.7)'
			},
			{
				id:'WebDeveloper',
				name:'web dev',
				time:[2013+5/12,2013+9/12],
				shape:'square',
				labelHeight:svgHeight-210,
				colour:'rgba(66,192,150,.7)'
			},
			{
				id:'UMassInternship2',
				name:'Researcher at UMass',
				time:[2013+5.5/12,2013+8/12],
				shape:'square',
				labelHeight:svgHeight-240,
				colour:'rgba(136,28,28,.5)'
			},
			{
				id:'RITIntership',
				name:'researcher at RIT',
				time:[2013+8/12,2014+5/12],
				shape:'square',
				labelHeight:svgHeight-260,
				colour:'rgba(243,110,33,.7)'
			},
		]

function  makeShape(points,type,name)
{
	if (type == 'triangle')
	{
		mid = points[0]+(points[1]-points[0])/2
		a = {x:xScale(points[0]),y:svgHeight-50}
		b = {x:xScale(mid),y:svgHeight-50-100}
		c = {x:xScale(points[1]),y:svgHeight-50}
		return([a,b,c])
	}
	if (type == 'square')
	{
		h = svgHeight-50-100
		if (name =="web dev")
		{
			h = svgHeight-50-100-15
		}
		a = {x:xScale(points[0]),y:svgHeight-50}
		b = {x:xScale(points[0]),y:h}
		c = {x:xScale(points[1]),y:h}
		d = {x:xScale(points[1]),y:svgHeight-50}
		return([a,b,c,d])
	}
}

svg = d3.select("#exp_svg").append("svg")// add the svg element to body
		.attr("width" , svgWidth)
		.attr("height", svgHeight);


var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("basis");


var xScale = d3.scale.linear()
	.domain([2011,2014+5/12])
	.range([20,svgWidth-20])


svg.selectAll("path")
	.data(data)
	.enter()
	.append("path")
	.style('position','relative')
	.style('cursor','pointer')
	.attr("id",function(d){return(d.id)})
	.attr("fill", function(d){return(d.colour)})
	.attr("stroke-width",10)
	.attr("d", function(d){return(lineFunction(makeShape(d.time,d.shape,d.name)))})
	.on("click", function(d){showDesc(d)});


svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr('r',5)
	.style("fill", "#222")
	.style('cursor','pointer')
	.attr('cx',function(d){return(xScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	.attr('cy',svgHeight-50-50)
	.on("click", function(d){showDesc(d)});

svg.selectAll("line")
	.data(data)
	.enter()
	.append("line")
	.attr('y1',svgHeight-50-50)
	.attr('y2',function(d){return(d.labelHeight)})
	.style("stroke", "#222")
	.style('cursor','pointer')
	.style("stroke-width", 2)
	.on("click", function(d){showDesc(d)})
	.attr('x1',function(d){return(xScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	.attr('x2',function(d){return(xScale(d.time[0]+(d.time[1]-d.time[0])/2))});


svg.selectAll("text")
	.data(data)
	.enter()
	.append("text")
	.text(function(d){return(d.name)})
	.style("stroke", "#222")
	.style('cursor','pointer')
	.on("click", function(d){showDesc(d)})
	.attr('y',function(d){return(d.labelHeight-2)})
	.attr("text-anchor", 
			function(d){
							if (d.name == 'RIT')
							{
								return("end")
							}

							if (d.name == 'web dev')
							{
								return("start")
							}
							return("middle")
						}
		 ) 
 	.attr('x',function(d){return(xScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	;

var xAxis = d3.svg.axis()
.scale(xScale)
.tickSize(4).tickPadding(8).ticks(3).tickFormat(d3.format("0000"))
.orient("bottom");

svg.append("g")
.attr("class", "x axis")
.attr("stroke","#222")
.attr("transform", "translate(0," + String(svgHeight-50) + ")")
.call(xAxis);


function showDesc(d)
{
	if (d.id == 'CollegeSVG') {element = 'College'}
		else if (d.id == 'UMassInternship1SVG') {element = 'UMass1'}
		else if (d.id == 'ConcordConsortium') {element = 'CC'}
		else if (d.id == 'WebDeveloper') {element = 'webDev'}
		else if (d.id == 'UMassInternship2') {element = 'UMass2'}
		else if (d.id == 'RITIntership') {element = 'RIT'};
		experiences = ['#College','#UMass1','#CC','#webDev','#UMass2','#RIT']
		var i = experiences.indexOf('#'+element);
		if(i != -1) {
			experiences.splice(i, 1);
		}
		for (var i = experiences.length - 1; i >= 0; i--) {
			experiences[i] = d3.select(experiences[i])[0][0]
		};
		about = d3.select('#'+element)[0][0]
		showHide(about,experiences)
}