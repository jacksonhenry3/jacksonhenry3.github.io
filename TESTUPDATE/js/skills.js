data = 
[
	{
		name:'python',
		skill:.8
	},
	{
		name:'mathematica',
		skill:.55
	},

	{
		name:'git',
		skill:.5
	},
		{
		name:'bash',
		skill:.45
	},
	{
		name:'LaTeX',
		skill:.45
	},
	{
		name:'javascript',
		skill:.7
	},
	{
		name:'HTML/CSS(Sass)',
		skill:.85
	},
	{
		name:'Web Design',
		skill: .75
	},
	{
		name:'Image editing',
		skill:.3
	}

	// {
	// 	name:'Ubuntu',
	// 	skill:.7
	// },
	// {
	// 	name:'Windows',
	// 	skill:.9
	// },
	// {
	// 	name:'OSX',
	// 	skill:.7
	// }
	// {
	// 	name:'matlab',
	// 	skill:.1
	// },
	// {
	// 	name:'arduino',
	// 	skill:.1
	// },

	// {
	// 	name:'VIM',
	// 	skill:.3
	// }

]
tau = 2*Math.PI

arc = d3.svg.arc()
	.innerRadius(35)
	.outerRadius(60)
	.startAngle(0)
	.endAngle(function(d){return(d)})

circle = d3.svg.arc()
	.innerRadius(0)
	.outerRadius(33)
	.startAngle(0)
	.endAngle(tau)

container = d3.select("#computerSkillContainer")

container.selectAll('.skill')
	.data(data)
	.enter()
	.append('svg')
	.attr('width',200)
	.attr('height',200)
	.attr('class','skill')
	.selectAll("path")
	.data(function(d){return([d])})
	.enter()
	.append("path")
	.attr('class','experienceBar')
    .attr("transform", "translate(100,100)")
    .attr("d", function(d){return(arc(d.skill*tau))})
    .attr('fill','rgba(66,192,150,.8)');

container.selectAll('.skill')
	.selectAll(".center")
	.data(function(d){return([d])})
	.enter()
	.append("path")
    .attr("transform", "translate(100,100)")
    .attr("d", function(d){return(circle(d.skill*tau/2))})
    .attr('fill','rgba(66,192,150,.3)');

container.selectAll('.skill')
	.selectAll("text")
	.data(function(d){return([d])})
	.enter()
	.append("text")
	.text(function(d){return(d.name)})
	.attr('y',180)
	.attr("text-anchor", 'middle')
	.attr('x',100)	;