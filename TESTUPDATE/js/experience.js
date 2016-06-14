svgWidth = 340
svgHeight = 1300;
center = 50

data =  [
			// {
			// 	name:'Shutesburry Elementary',
			// 	time:[1998,2006],
			// 	
			// 	colour:'#B1C6BF'
		 // 	},
			// {
			// 	name:'ARMS',
			// 	time:[2006,2008],
			// 	
			// 	colour:'rgba(136,28,28,.7)'
			// },
			{
				id:'highSchool',
				name:'ARHS',
				time:[2011+.5/12,2012+5/12],
				labelHeight:svgHeight-160,
				colour:'rgba(143,25,25,.7)',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id:'CollegeSVG',
				name:'RIT',
				time:[2012+8/12,2015+11.5/12],
				labelHeight:svgHeight-180,
				colour:'rgba(243,110,33,.7)',
				content: "<ul><li>Physics Major, Mathematics  Minor</li> <li>GPA of 2.99</li></ul>"
			},
			{
				id:'UMassInternship1SVG',
				name:'UMass Internship',
				time:[2011+.5/12,2012+5/12],
				labelHeight:svgHeight-240,
				colour:'rgba(136,28,28,.7)',
				content: "Worked on a visual aid of the r-mode oscillations of a neutron star for research mentor Dr. Cadonati, under her graduate student Dr. Mohopatra. "
			},
			{
				id:'ConcordConsortium',
				name:'Concord Consortium',
				time:[2012+5.5/12,2012+8/12],
				labelHeight:svgHeight-200,
				colour:'rgba(248,166,21,.7)',
				content: "Explored and reported on inaccuracies in the <a href = 'http://mw.concord.org/nextgen/#interactives'>Next Generation Molecular</a> Workbench physics simulation, using Python and Javascript."
				},
			// {
			// 	id:'WebDeveloper',
			// 	name:'web dev',
			// 	time:[2013+5/12,2013+9/12],
		
			// 	labelHeight:svgHeight-210,
			// 	colour:'rgba(66,192,150,.7)',
			// content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'	// 
		// },
			{
				id:'UMassInternship2',
				name:'Researcher at UMass',
				time:[2013+5.5/12,2013+7.9/12],
				labelHeight:svgHeight-240,
				colour:'rgba(136,28,28,.7)',
				content: "<ul><li> Updated LIGO summary pages (web pages that display live primary and secondary data channels). </li><li> Began to set up summary pages on LIGO Hanford server. </li><li> Fixed real time plotting on summary pages. </ul>"			},
			{
				id:'RITIntership',
				name:'Researcher at RIT',
				time:[2013+8.1/12,2014+5.5/12],
				labelHeight:svgHeight-260,
				colour:'rgba(243,110,33,.7)',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id:'RITIntership2',
				name:'Researcher at RIT',
				time:[2014+8.1/12,2015+5/12],
				labelHeight:svgHeight-200,
				colour:'rgba(243,110,33,.7)',
				content: "<ul><li> Worked creating and modifying python scripts to calculate and visualize the detection geometry of all the Laser Interferometer Gravitational Observatory (LIGO) detectors, advised by Dr. Whelan.</li><li> Worked on testing how the inclusion of higher harmonics in High mass black hole in-spirals affects parameter estimation, advised by Dr. O'Shaugnessy.</li></ul>" 
			},
			{
				id:'AEIMPG',
				name:'Albert Einstien Institute',
				time:[2014+5.7/12,2014+7.9/12],
				labelHeight:svgHeight,
				colour:'rgba(50,70,200,.7)',
				content: "<ul><li> Calculated and created visuals of the Detection geometry of LIGO Scientific Collaboration (LSC) interferometers.</li><li> Met regularly with the Compact Binary Coalescence (CBC) group and the rest of the institute to talk about my progress and discuss others work.</ul>"			},
			
			{	
				id:'SeniorThesis',
				name:'Senior Thesis',
				time:[2015+7/12,2015+11.5/12],
				labelHeight:svgHeight-200,
				colour:'rgba(243,110,33,.7)',
				content: "<ul><li> Testing the inclusion of eccentricity in parameter estimation code by modelling systems with high order post-Newtonian approximations under the advisement of Dr. Eric West and Dr. Richard O'Shaughnessy.</li><li> Verified expression for linearized gravity and for the perturbations due to in-spirals.</li><li> self directed investigation of Gravitational Wave physics.</ul>"
			}
		]

function  makeShape(points,name)
{

		originX = center+7
		width = 37

		if (name =="RIT" || name =="ARHS")
		{
			originX = center-7-width
		}

		a = {y:yScale(points[0]),x:originX}
		b = {y:yScale(points[0]),x:originX+width}
		c = {y:yScale(points[1]),x:originX+width}
		d = {y:yScale(points[1]),x:originX}
		return([a,b,c,d])
}

function  dist(name,text)
{
	if (text == false){deviation = 60}
	if (text == true){deviation = 70}
		

		if (name =="RIT" || name =="ARHS")
		{
			deviation = -25
		}

		return(deviation)
}

function anch(name)
{
	ret = "start"
	if (name =="RIT" || name =="ARHS")
		{
			ret = 'middle'
		}
	return(ret)

}
svg = d3.select("#exp_svg").append("svg")// add the svg element to body
		.attr("width" , svgWidth)
		.attr("height", svgHeight);


var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; });
    // .interpolate("basis");


var yScale = d3.scale.linear()
	.domain([2016,2011])
	.range([20,svgHeight-20])


svg.selectAll("path")
	.data(data)
	.enter()
	.append("path")
	.on("click", function(d){showDesc(d.name,d.content)})
	.style('position','relative')
	.attr("id",function(d){return(d.id)})
	.attr("fill", function(d){return(d.colour)})
	.style('cursor','pointer')
	.attr("stroke-width",10)
	.attr("d", function(d){return(lineFunction(makeShape(d.time,d.name)))});
	// .on("click", function(d){showDesc(d.name,d.content)});



svg.selectAll("line")
	.data(data)
	.enter()
	.append("line")
	.attr('x1',center)
	.attr('x2',
		function(d)
		{
			if (d.name !="RIT" && d.name !="ARHS")
				{
					return(center+dist(d.name,false))
				}
			else
			{
				return(center)
			}
		}
	)
	.style("stroke", "#222")
	.style('cursor','pointer')
	.style("stroke-width", 2)
	.style('cursor','pointer')
	.on("click", function(d){showDesc(d.name,d.content)})
	.on("click", function(d){showDesc(d.name,d.content)})
	.attr('y1',function(d){return(yScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	.attr('y2',function(d){return(yScale(d.time[0]+(d.time[1]-d.time[0])/2))});


svg.selectAll("text")
	.data(data)
	.enter()
	.append("text")
	.text(function(d){return(d.name)})
	.style('cursor','pointer')
	.style("stroke", "#222")
	.style("font-size",'1.2em')
	.style("font-weight","lighter")
	.style("font-family", 'Roboto Slab')
	.on("click", function(d){showDesc(d.name,d.content)})
	.attr("text-anchor",function(d){return(anch(d.name))})
	.attr('x',function(d){return(center+dist(d.name,true))})
 	.attr('y',function(d){return(4+yScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	;

var yAxis = d3.svg.axis()
.scale(yScale)
.tickSize(4).tickPadding(8).ticks(4).tickFormat(d3.format("0000"))
.orient("left");

svg.append("g")
.attr("class", "y axis")
.attr("stroke","#222")
.style("fill", "#222")
.attr("transform", "translate("+(center+1.5)+",0)")
.call(yAxis);

svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr('r',4)
	.style("fill", "#222")
	.style('cursor','pointer')
	.attr('cy',function(d){return(yScale(d.time[0]+(d.time[1]-d.time[0])/2))})
	.attr('cx',function(d)
		{
			if (d.name !="RIT" && d.name !="ARHS")
				{
					return(center+dist(d.name,false))
				}
			else
			{
				return(-100000)
			}
		})
	.on("click", function(d){showDesc(d.name,d.content)});

$("#close").click(function(){$("html").toggleClass('c');$('.description').toggleClass('shown')})

function showDesc(name,text)
{
	$("html").toggleClass('c');

	desc = $('.description')
	desc.toggleClass('shown')

	text =	$('#DescriptionContent').html(text)
	$('#DescriptionTitle').html(name)
}