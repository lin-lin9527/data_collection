import * as d3 from "d3";
var g, radius
var init = function (data) {
  var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height")
  
  radius = (Math.min(width, height) / 2) - 20 //修改radius
  // d3.selectAll("svg g").remove()
  g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  update(data)
};

var update = function(data) {
  var exitInfo = d3.selectAll("g .arc")
  exitInfo.remove()
  var color = d3.scaleOrdinal(['#ffcfad', '#9b8742', '#b8aa95', '#5e5a54', '#e6d1b1', '#ce8303']);
  var pie = d3.pie().value(function (d) { return d.value; });

  var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  //新增label
  var label = d3.arc()
    .outerRadius(radius + 30)
    .innerRadius(radius - 75);

  var arcs = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc")

  arcs.append("path")
    .transition()
    .duration(1000)
    .attr("stroke", "white")
    .style("stroke-width", "3px")
    .style("opacity", 1)
    .attr("fill", function (d, i) {
      return color(i);
    })
    .attr("d", arc);

  //將label加到圓餅上
  arcs.append("text")
    .attr("transform", function (d) {
      console.log("CCCCCCCCCCCC",d)
      return "translate(" + label.centroid(d) + ")";
    })
    .text(function (d) { return d.value });
}
export { init,update };
