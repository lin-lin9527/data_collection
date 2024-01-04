import * as d3 from "d3";

var svg, chart, grp
var margin = { top: 0, bottom: 20, left: 30, right: 20 };
var init = function (data) {
  svg = d3
    .select("#chart")
    .append("svg")
    .attr("height", 300)
    .attr("width", 600);
  chart = svg.append("g").attr("transform", `translate(${margin.left},0)`);
  grp = chart
    .append("g")
    .attr("transform", `translate(-${margin.left},-${margin.top})`);
  update(data)
}
var update = function (data) {  
  const width = +svg.attr("width") - margin.left - margin.right;
  const height = +svg.attr("height") - margin.top - margin.bottom;
  d3.select(".xBar").remove()
  d3.select(".yBar").remove()
  d3.select(".chart_path").remove()
  // Create scales
  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, d => d.popularity)]);
  const xScale = d3
    .scaleLinear()
    .range([0, width])
    .domain(d3.extent(data, d => d.year));

  const line = d3
    .line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.popularity));

  // Add path
  const path = grp
    .append("path")
    .attr("class", "chart_path")
    .attr("transform", `translate(${margin.left},0)`)
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  const pathLength = path.node().getTotalLength();
  const transitionPath = d3
    .transition()
    .ease(d3.easeSin)
    .duration(1000);

  path
    .attr("stroke-dashoffset", pathLength)
    .attr("stroke-dasharray", pathLength)
    .transition(transitionPath)
    .attr("stroke-dashoffset", 0);

  // Add the X Axis
  chart
    .append("g")
    .attr("class", "xBar")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).ticks(data.length));
  // Add the Y Axis
  chart
    .append("g")
    .attr("class", "yBar")
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(yScale));
}
export { init, update };
