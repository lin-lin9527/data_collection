import * as d3 from "d3";

var width
var height = 200;
var durationInfo = 2000
var margin = { top: 20, right: 0, bottom: 0, left: 40 };
var init = function (data, className) {
  d3.select(`.${className} svg`).remove()
  width = document.querySelector(`.${className}`).clientWidth;
  var list_data = [];
  for (let i = 0; i < 60; i++) {
    list_data.push({
      value: Math.floor(Math.random() * 500),
      index: parseInt(i),
    });
  }
  d3.select("body").append("div")
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
  let tooltipInfo = d3.select(`.${className}-tip`)
  var x = d3.scaleLinear().domain(d3.extent(list_data, (d) => d.index)).range([0, width]);
  var y = d3.scaleLinear().domain([0, d3.max(list_data, (d) => d.value) + 20]).range([height, 0]);
  var initX = x(-1)

  var chart = d3
    .select(`.${className}`)
    .append("svg")
    .attr("width", width)
    .attr("height", height+50)
    .append("g")
    .attr("class", `${className}_chart_group`)
    .attr("transform", "translate(" + margin.left + "," + 10 + ")");
  
  chart.append("defs")
    .append("clipPath")
    .attr("id", `${className}_clip`)
    .append("rect")
    .attr("width", width)
    .attr("height", height)
  // -----------------------------------
  var line = d3.line()
    .x((d) => x(d.index))
    .y((d) => y(d.value));
  // -----------------------------------
  
  // Draw the axis
  var axisX = chart
    .append("g")
    .attr("class", `${className}_axis_x`)
    .attr("transform",`translate(0,${y(0)})`)
    .call(d3.axisBottom(x));
  
  var axisY = chart
    .append("g")
    .attr("class", `${className}_axis_y`)
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(y));
  
  // Append the holder for line chart and circles
  var chartGroup = chart.append("g").attr("clip-path", `url(#${className}_clip)`)
  var pathGroup = chartGroup.append("g").attr("class",`${className}_path_group`)
  
  // Append path
  var path = pathGroup.append("path")
    .attr("class", "line")
    .attr("fill","none")
    .attr("stroke","#D073BA")
    .attr("stroke-width","1.5px");
    
  // Main loop
  function tick() {
    // Generate new data
    var lastQ = {
      value: Math.floor(Math.random() * 500),
      index: list_data[list_data.length - 1].index + 1,
    };
    list_data.push(lastQ);
    
    // Draw new line
    path.datum(list_data).attr("d", line)

    // Update circles
    var circles = pathGroup.selectAll("circle");
    circles
      .data(list_data)
      .enter()
      .append("circle")
      .merge(circles)
      .attr("r", 3)
      .attr("stroke-width", 2)
      .attr("stroke","#D073BA")
      .attr("fill","white")
      .attr("cx", (d) => x(d.index))
      .attr("cy", (d) => y(d.value))
      .on('mouseenter', function(d,i) {
        d3.select(this).attr('class','circle').attr('r', 6).attr("stroke-width", 3);
        tooltipInfo.transition().duration(300).style("opacity", 1);
        lineTooltipDraw(d, i, tooltipInfo)
      })
      .on('mousemove', function (d, i) {
        lineTooltipDraw(d, i, tooltipInfo)
      })
      .on('mouseout', function() {
        d3.select(this).attr('class','circle').attr('r', 3).attr("stroke-width", 2);
        tooltipInfo.transition().duration(300).style("opacity", 0);
      });
    circles.exit().remove();

    // Shift the chart left
    pathGroup.attr("transform", null)
      .transition()
      .duration(durationInfo)
      .ease(d3.easeLinear)
      .attr("transform", `translate(${initX},0)`)
      .on("end", tick);

    list_data.shift();
    x.domain(d3.extent(list_data, (d) => d.index));
    axisX.transition().duration(durationInfo).ease(d3.easeLinear).call(d3.axisBottom(x));
    
    y.domain([0, d3.max(list_data, (d) => d.value) + 20]);
    axisY.transition().duration(durationInfo).ease(d3.easeLinear).call(d3.axisLeft(y));
  }
  tick();
  function lineTooltipDraw(position, info, tooltip) {
    var left_position;
    let html = `<h2>
      ID: ${info.index}<br>
      Value: ${info.value}<br>
    </h2>`;
    if (width / 2 >= position.layerX - 50) left_position = position.pageX + 10;
    else left_position = position.pageX - 250;
    tooltip.html(html)
      .style("left", (left_position) + "px")
      .style("top", (position.pageY - 15) + "px");
  }
}

export { init };
