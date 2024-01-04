import * as d3 from "d3";
var svg, radius, donutWidth, donutTip
var total
var legendRectSize = 13;
var legendSpacing = 7;
var width = 250;
var height = 250;

var init = function (data, id) {
  radius = Math.min(width, height) / 2;
  donutWidth = 50; // 50: 中間顯示空白，125: 中間填滿
  svg = d3.select(`.${id}`)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
  donutTip = d3.select("body").append("div")
    .attr("class", `${id}-tip`)
    .style("opacity", 0);
  update(data, id);
};

var update = function (data, id) {
  var svgInfo = d3.select(`.${id} svg g`)
  var tooltipInfo = d3.select(`.${id}-tip`)
  total = 0
  for (let i in data) total += data[i].value
  svgInfo.selectAll(".circle-legend").remove()
  var arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);
  var pie = d3.pie().value((d) => d.value).sort(null);

  var pathData = svgInfo.selectAll('path').data(pie(data))
  pathData.enter()
    .append('path')
    .each(function(d) {
      this._current = {
        startAngle: d.startAngle,
        endAngle: d.endAngle
      };
    })
    .attr('d', arc)
    .attr('fill', (d) => d.data.color)
    .attr('transform', 'translate(0, 0)')
    .on('mouseover', function (d, i) {
      // d3.select(this)
      //   .transition()
      //   .duration(300)
      //   .attr('transform', calcTranslate(i, 6))
      //   .attr('stroke', 'rgba(100, 100, 100, 0.2)')
      //   .attr('stroke-width', 5);
      // d3.select(this).transition().duration('50').attr('opacity', '.85');
      tooltipInfo.transition().duration(300).style("opacity", 1);
      donutTipDraw(d, i, tooltipInfo)
    })
    .on('mousemove', (d, i) => donutTipDraw(d, i, tooltipInfo))
    .on('mouseout', function () {
      // d3.select(this)
      //   .transition()
      //   .duration(300)
      //   .attr('transform', 'translate(0, 0)')
      //   .attr('stroke', 'transparent')
      //   .attr('stroke-width', 0);
      // d3.select(this).transition().duration('50').attr('opacity', '1');
      tooltipInfo.transition().duration(300).style("opacity", 0);
    });
  function calcTranslate(data, move = 4) {
    const moveAngle = data.startAngle + ((data.endAngle - data.startAngle) / 2);
    return `translate(${- move * Math.cos(moveAngle + Math.PI / 2)}, ${- move * Math.sin(moveAngle + Math.PI / 2)})`;
  }
  var legend = svgInfo.selectAll('.legend')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'circle-legend')
    .attr('transform', function (d, i) {
      var height = legendRectSize + legendSpacing;
      var horz = -2 * legendRectSize - 13;
      var vert = i * height - 30 ;
      return 'translate(' + horz + ',' + vert + ')';
    });

  legend.append('circle')
    .style('fill', (d) => d.color)
    .style('stroke', (d) => d.color)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', '.5rem');

  legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text((d) => d.title);
  
  pathData.transition()
    .duration(750)
    .attrTween("d", arcTween);

  function arcTween(d) {
    var i = d3.interpolate(this._current, d);
    this._current = i(0);
    return function (t) {
      return arc(i(t));
    };
  }
}

var donutTipDraw = function (position, info, tooltip) {
  let html = `<h2>
    Title: ${info.data.title}
    <br>
    Value: ${info.data.value}
    <br>
    Total: ${total}
    <br>
    Person: ${(Math.round((info.data.value / total) * 100)).toString()}%
  </h2>`;
  tooltip.html(html)
    .style("left", (position.pageX + 10) + "px")
    .style("top", (position.pageY - 15) + "px");
}

export { init, update };
