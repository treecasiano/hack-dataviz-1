(function (){
  // using underscore to generate random numbers for this example dataset
  var dataset = _.map(_.range(25), function (i){
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      radius: Math.random() * 20
    }
  });

  var margin = {top: 0, right: 0, bottom: 0, left: 0};

  var width = 600 - margin.left - margin.right;
  var height = 250 - margin.top - margin.bottom;

  var svg = d3.select('#bubbleChart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

  var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function (data) {
    return data.y;
    })])
   .range([height, 0]);

  var xScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, width]);

  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'bubble')
    .attr('cx', function (data) {
    return xScale(data.x);
  })
    .attr('cy', function (data) {
    return yScale(data.y);
  })
    .attr('r', function (data) {
    return data.radius;
  });
});
