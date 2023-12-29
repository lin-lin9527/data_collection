import * as d3 from "d3";

var width, height, svg, barTooltip
var init = function (data) {
  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 30, bottom: 90, left: 40 }
  width = 500
  // width = document.querySelector("#my_dataviz").clientWidth
  height = 300 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  barTooltip = d3.select("body").append("div")
    .attr("class", "bar-tip")
    .style("opacity", 0);
  update(data);
}

var update = function (data) {
  var max = Math.max.apply(null, data.map(function (o) {
    return o.value;
  }))
  // d3.selectAll("rect").remove()
  d3.selectAll(".xBar").remove()
  d3.selectAll(".yBar").remove()

  // Parse the Data
  // X axis
  var x = d3.scaleBand()
    .range([0, width])
    .domain(data.map(function (d) { return d.title; }))
    .padding(0.2);
  svg.append("g")
    .attr("class", "xBar")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(0,0)")
    .style("text-anchor", "middle");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, max])
    .range([height, 0]);
  svg.append("g").attr("class", "yBar").call(d3.axisLeft(y));

  // Bars
  var barInfo = svg.selectAll(".barInfo").data(data)
  barInfo
    .enter()
    .append("rect")
    .attr("class", "barInfo")
    .attr("x", function (d) { return x(d.title); })
    .attr("width", x.bandwidth())
    .attr("fill", "#69b3a2")
    // no bar at the beginning thus:
    .attr("height", function (d) { return height - y(0); }) // always equal to 0
    .attr("y", function (d) { return y(0); })
    .on('mouseover', function (d, i) {
      barTooltip.transition().duration(300).style("opacity", 1);
      let num = `<h2>
          Title: ${i.title}<br>
          Value: ${i.value}<br>
        </h2>`;
        barTooltip.html(num)
        .style("left", (d.pageX + 10) + "px")
        .style("top", (d.pageY - 15) + "px");
    })
    .on('mousemove', function (d, i) {
      let num = `<h2>
          Title: ${i.title}<br>
          Value: ${i.value}<br>
        </h2>`;
        barTooltip.html(num)
        .style("left", (d.pageX + 10) + "px")
        .style("top", (d.pageY - 15) + "px");
    })
    .on('mouseout', function () {
      barTooltip.transition().duration(300).style("opacity", 0);
    });

  // Animation
  svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function (d) { return y(d.value); })
    .attr("height", function (d) { return height - y(d.value); })
    .delay(function (d, i) { return (i * 100) })
}

export { init, update };
