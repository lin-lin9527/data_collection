import * as d3 from "d3";
var svg, radius, donutWidth, donutTip
var legendRectSize = 13;
var legendSpacing = 7;

var init = function (data) {
  var width = 300;
  var height = 300;
  radius = Math.min(width, height) / 2;
  donutWidth = 75;
  svg = d3.select('#donut')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
  donutTip = d3.select("body").append("div")
    .attr("class", "donut-tip")
    .style("opacity", 0);
  update(data);
};

var update = function (data) {
  var color = d3.scaleOrdinal().range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);
  var arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);
  var pie = d3.pie().value((d) => d.value).sort(null);

  var pathData = svg.selectAll('path').data(pie(data))
  pathData.enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d) => color(d.data.title))
    .attr('transform', 'translate(0, 0)')
    .on('mouseover', function (d, i) {
      // d3.select(this)
      //   .transition()
      //   .duration(300)
      //   .attr('transform', calcTranslate(i, 6))
      //   .attr('stroke', 'rgba(100, 100, 100, 0.2)')
      //   .attr('stroke-width', 5);
      // d3.select(this).transition().duration('50').attr('opacity', '.85');
      donutTip.transition().duration(300).style("opacity", 1);
      let num = `<h2>
          Title: ${i.data.title}
          <br>
          Value: ${i.data.value}
          <br>
          Total: ${i.data.all}
          <br>
          Person: ${(Math.round((i.data.value / i.data.all) * 100)).toString()}%
        </h2>`;
      donutTip.html(num)
        .style("left", (d.pageX + 10) + "px")
        .style("top", (d.pageY - 15) + "px");
    })
    .on('mousemove', function (d, i) {
      let num = `<h2>
          Title: ${i.data.title}
          <br>
          Value: ${i.data.value}
          <br>
          Total: ${i.data.all}
          <br>
          Person: ${(Math.round((i.data.value / i.data.all) * 100)).toString()}%
        </h2>`;
      donutTip.html(num)
        .style("left", (d.pageX + 10) + "px")
        .style("top", (d.pageY - 15) + "px");
    })
    .on('mouseout', function () {
      // d3.select(this)
      //   .transition()
      //   .duration(300)
      //   .attr('transform', 'translate(0, 0)')
      //   .attr('stroke', 'transparent')
      //   .attr('stroke-width', 0);
      // d3.select(this).transition().duration('50').attr('opacity', '1');
      donutTip.transition().duration(300).style("opacity", 0);
    });
  function calcTranslate(data, move = 4) {
    const moveAngle = data.startAngle + ((data.endAngle - data.startAngle) / 2);
    return `translate(${- move * Math.cos(moveAngle + Math.PI / 2)}, ${- move * Math.sin(moveAngle + Math.PI / 2)})`;
  }
  var legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'circle-legend')
    .attr('transform', function (d, i) {
      var height = legendRectSize + legendSpacing;
      var offset = height * color.domain().length / 2;
      var horz = -2 * legendRectSize - 13;
      var vert = i * height - offset;
      return 'translate(' + horz + ',' + vert + ')';
    });

  legend.append('circle')
    .style('fill', color)
    .style('stroke', color)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', '.5rem');

  legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text((d) => d);
    
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

export { init, update };
