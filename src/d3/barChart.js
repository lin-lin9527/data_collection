import * as d3 from "d3";

var width, height, svg, barTooltip
var init = function (data, className) {
  var margin = { top: 20, right: 40, bottom: 20, left: 50 }
  width = document.querySelector(`.${className}`).clientWidth - 80
  height = 200;

  svg = d3.select(`.${className}`)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("class", `${className}_g`)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  barTooltip = d3.select("body").append("div")
    .attr("class", `${className}-tip`)
    .style("position", "absolute")
    .style("text-align", "left")
    .style("word-break", "break-word")
    .style("width", "300px")
    .style("padding", "20px 20px")
    .style("font", "13px sans-serif")
    .style("border", "0px")
    .style("pointer-events", "none")
    .style("border-radius", "8px")
    .style("backdrop-filter", "blur(170px)")
    .style("box-shadow", "rgba(0, 0, 0, 0.3) 2px 8px 8px")
    .style("border", "0px rgba(255, 255, 255, 0.4) solid")
    .style("border-bottom", "0px rgba(40, 40, 40, 0.35) solid")
    .style("border-right", "0px rgba(40, 40, 40, 0.35) solid")
    .style("opacity", 0);
  update(data, className);
}

var editWidth = function (data, className) {
  d3.select(`.${className} svg`).remove();
  d3.select(`.${className}_tip`).remove();
  init(data, className)
}

var update = function (data, className) {
  var svgInfo = d3.select(`.${className}_g`)
  var tooltipInfo = d3.select(`.${className}-tip`)
  svgInfo.selectAll(".xBar").remove()
  svgInfo.selectAll(".yBar").remove()
  var max = Math.max.apply(null, data.map(function (o) {
    return o.value;
  }))

  // X axis
  var x = d3.scaleBand()
    .range([0, width])
    .domain(data.map((d) => { return d.title; }))
    .padding(0.2);
  svgInfo.append("g")
    .attr("class", "xBar")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(0,0)")
    .style("text-anchor", "middle");

  // Y axis
  var y = d3.scaleLinear().domain([0, max]).range([height, 0]);
  svgInfo.append("g").attr("class", "yBar").call(d3.axisLeft(y));

  // Bars
  var barInfo = svgInfo.selectAll(".barInfo").data(data)
  barInfo
    .enter()
    .append("rect")
    .attr("class", "barInfo")
    .attr("x", (d) => x(d.title))
    .attr("width", x.bandwidth())
    .attr("fill", "#69b3a2")
    .attr("height", () => height - y(0))
    .attr("y", () => y(0))
    .on('mouseover', (d, i) => {
      tooltipInfo.transition().duration(300).style("opacity", 1);
      barTooltipDraw(d, i, tooltipInfo)
    })
    .on('mousemove', function (d, i) {
      d3.select(this).transition().duration(200).attr("fill", "#08B2B2")
      barTooltipDraw(d, i, tooltipInfo)
    })
    .on('mouseout', function () {
      d3.select(this).transition().duration(200).attr("fill", "#69b3a2")
      tooltipInfo.transition().duration(300).style("opacity", 0);
    });

  // Animation
  svgInfo.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("y", (d) => { return y(d.value); })
    .attr("height", (d) => { return height - y(d.value); })
    .delay((d, i) => { return (i * 100) })
}

var barTooltipDraw = function (position, info, tooltip) {
  var left_position;
  let html = `<h2>
    Title: ${info.title}<br>
    Value: ${info.value}<br>
  </h2>`;
  if (width / 2 >= position.layerX - 50) left_position = position.pageX + 10;
  else left_position = position.pageX - 250;
  tooltip.html(html)
    .style("left", (left_position) + "px")
    .style("top", (position.pageY - 15) + "px");
}

export { init, editWidth, update };
