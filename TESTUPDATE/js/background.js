// ITERS = 0



// $(window).scroll(function(){
//     var scrolledFromtop = $(window).scrollTop();

//     $('#background_svg').css('top',.3*$(window).scrollTop())


// });




// window.onload = function(){

//   var width = 960, height = 500, colors = d3.scale.category10();

//   var width = $('body').width()

//   var height =$('body')[0].scrollHeight

//   var n = 50, // number of nodes
//       m = 25, // number of links
//       charge = -5000;

//   var svg = d3.select("body").append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("id","background_svg");

//   create();

//   function create () {
//     svg.selectAll(".link, .node").remove();
//     randomGraph(n, m, charge);
//   }

//   function randomGraph (n, m, charge) { //creates a random graph on n nodes and m links
//     var nodes = d3.range(n).map(Object),
//         list  = randomChoose(unorderedPairs(d3.range(n)), m),
//         links = list.map(function (a) { return {source: a[0], target: a[1]} });

//     var force = d3.layout.force()
//         .size([width, height])
//         .nodes(nodes)
//         .links(links)
//         .charge(charge)
//         .on("tick", tick)
//         .start();

//     var svgLinks = svg.selectAll(".link").data(links)
//       .enter().append("line")
//         .attr("class", "link");

//     var svgNodes = svg.selectAll(".node").data(nodes)
//       .enter().append("circle")
//         .attr("class", "node")
//         .attr("r", 10);
//         // .style("fill", "rgba(25,100,200,.2)");

//     // svgNodes.transition().duration(800)
//     //     .attr("r", function (d) { return 3 + 3 * d.weight })
//     //     .style("fill", function (d) { return colors(d.weight) });

//     svgLinks.transition().duration(1500)
//         .style("stroke-width", 2);

//     function tick () {
//       ITERS+=1
      
//       svgNodes
//           .attr("cx", function(d) { return d.x })
//           .attr("cy", function(d) { return d.y });

//       svgLinks
//           .attr("x1", function(d) { return d.source.x })
//           .attr("y1", function(d) { return d.source.y })
//           .attr("x2", function(d) { return d.target.x })
//           .attr("y2", function(d) { return d.target.y });

//       if (ITERS==100){
//            force.stop()
//       // force.on("tick", function(){})
//         // .start();


//       }
//     }
//   }
// function randomChoose (s, k) { // returns a random k element subset of s
//   var a = [], i = -1, j;
//   while (++i < k) {
//     j = Math.floor(Math.random() * s.length);
//     a.push(s.splice(j, 1)[0]);
//   };
//   return a;
// }

// function unorderedPairs (s) { // returns the list of all unordered pairs from s
//   var i = -1, a = [], j;
//   while (++i < s.length) {
//     j = i;
//     while (++j < s.length) a.push([s[i],s[j]])
//   };
//   return a;
// }
// }