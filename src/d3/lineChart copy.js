import * as d3 from "d3";

var width
var margin = { top: 0, bottom: 30, left: 40, right: 20 };
var init = function (data, className) {
  width = document.querySelector(`.${className}`).clientWidth
  d3.select(`.${className}`)
    .append("svg")
    .attr("width", width)
    .attr("height", 250);
  d3.select(`.${className} svg`).append("g").attr("class", `${className}_group`).attr("transform", `translate(${margin.left},10)`);
  // d3.select(`.${className}_group`).append("g").attr("class", `${className}_chart_group`).attr("transform", `translate(-${margin.left},${margin.top})`);
  
  d3.select(`.${className} svg`)
    .append("defs")
    .append("clipPath")
    .attr("id", `${className}_clip`)
    .append("rect")
    .attr("width", width)
    .attr("height", 250);

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
  update(data, "first", className)
}

var editWidth = function (data, className) {
  d3.select(`.${className} svg`).remove();
  init(data, className)
}

var update = function (data, state, className) {
  var remove_class = ["_XBar","_YBar","_Path","_Circle","_clip"]
  for (let i in remove_class) 
    d3.selectAll(`.${className}${remove_class[i]}`).remove()
  let chart = d3.select(`.${className}_group`);
  let width = +d3.select(`.${className} svg`).attr("width") - margin.left - margin.right;
  let height = +d3.select(`.${className} svg`).attr("height") - margin.top - margin.bottom;
  let tooltipInfo = d3.select(`.${className}-tip`)

  // Create scales
  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain(d3.extent(data, d => d.year));
  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, d => d.popularity)]);
  const line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.popularity));

  // Add the X Axis
  chart
    .append("g")
    .attr("class", `${className}_XBar`)
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).ticks(data.length));
  // Add the Y Axis
  chart
    .append("g")
    .attr("class", `${className}_YBar`)
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(yScale));

  // Add path
  const path = chart
    .append("g")
    .attr("class",`${className}_clip`)
    .attr("clip-path", `url(#${className}_clip)`)
    .append("path")
    .attr("class", `${className}_Path`)
    .attr("transform", `translate(0,0)`)
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line(data));

  const pathLength = path.node().getTotalLength();
  const transitionPath = d3.transition().ease(d3.easeSin);
  path
    .attr("stroke-dashoffset", pathLength)
    .attr("stroke-dasharray", pathLength)
    .transition(transitionPath)
    .duration(state == "first" ? 1000 : 1000)
    .ease(d3.easeLinear)
    // .on("start", tick)
    .attr("stroke-dashoffset", 0);
  function tick() {
    console.log("$$$$$$$$$$$$$$$$$$",xScale(2000),xScale(data[1].year),xScale(data[data.length-1].year))
    if (state != "first") {
      var newData = {}
      newData["year"] = data[data.length -1]["year"] + 1
      newData["popularity"] = Math.floor(Math.random() * 700);
      data.shift();
      data.push(newData)
      d3.select(this).attr("d", line).attr("transform", null);
      d3.active(this).transition().duration(1000).attr("transform", "translate(" + -(xScale(data[0].year)) + ",0)");
    }
  }

  // Add Circle
  var circleContainer = chart.append('g').attr('class', `${className}_Circle`);
  data.forEach((datum, index) => drawCircle(datum, index));
  function drawCircle(datum, index) {
    circleContainer.datum(datum)
    .append('circle')
    .attr('class','circle')
    .attr('cx',(d) => xScale(d.year))
    .attr('cy',(d) => yScale(d.popularity))
    .on('mouseenter', function(d,i) {
      d3.select(this).attr('class','circle').attr('r', 6).attr("stroke-width", 3);
      tooltipInfo.transition().duration(300).style("opacity", 1);
      lineTooltipDraw(d, i, tooltipInfo)
    })
    .on('mousemove', function (d, i) {
      lineTooltipDraw(d, i, tooltipInfo)
    })
    .on('mouseout', function() {
      d3.select(this).attr('class','circle').attr('r', 5).attr("stroke-width", 2);
      tooltipInfo.transition().duration(300).style("opacity", 0);
    })
    .transition()
    .delay(() => {
      if (state == "first") return 100*index
      else return 0
    })
    .duration( () => {
      if (state == "first") return 750
      else return index == data.length-1 ? 750 : 0
    })
    .ease(d3.easeSin)
    .attr('r',5)
    .attr("fill", "white")
    .attr("stroke", "blue")
    .attr("stroke-width", 2);
  }
  function lineTooltipDraw(position, info, tooltip) {
    var left_position;
    let html = `<h2>
      Year: ${info.year}<br>
      Value: ${info.popularity}<br>
    </h2>`;
    if (width / 2 >= position.layerX - 50) left_position = position.pageX + 10;
    else left_position = position.pageX - 250;
    tooltip.html(html)
      .style("left", (left_position) + "px")
      .style("top", (position.pageY - 15) + "px");
  }  
}

var updateLine = function (data, className) {
  let transitionPath = d3.transition().ease(d3.easeSin);
  let width = document.querySelector(`.${className}`).clientWidth
  let height = 250
  d3.select(`.${className}_Path`)
    .transition(transitionPath)
    .duration(1000)
    .ease(d3.easeLinear)
    .on("start", tick)
  

  function tick() {
    console.log("@@@@@@@@@@@@",this)
    let xScale = d3.scaleLinear()
      .range([0, width])
      .domain(d3.extent(data, d => d.year));
    let yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.popularity)]);
    let line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.popularity));
    var newData = {}
    newData["year"] = data[data.length -1]["year"] + 1
    newData["popularity"] = Math.floor(Math.random() * 700);
    
    data.push(newData)
    d3.select(this).attr("d", line).attr("transform", null);
    d3.active(this).transition().duration(1000).attr("transform", "translate(" + (xScale(data[0].year)) + ",0)");

    data.shift();
  }
}

export { init,editWidth,update,updateLine };
