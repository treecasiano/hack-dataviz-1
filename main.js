var myTreehouseData = {
  "name": "Tree Casiano",
  "profile_name": "tree",
  "profile_url": "https://teamtreehouse.com/tree",
  "points": {
    "HTML": 1519,
    "CSS": 2298,
    "Design": 8,
    "JavaScript": 5819,
    "Ruby": 82,
    "PHP": 833,
    "WordPress": 49,
    "iOS": 204,
    "Android": 30,
    "Development Tools": 1359,
    "Business": 366,
    "Python": 1983,
    "Java": 63,
    "Digital Literacy": 200,
    "Game Development": 3,
    "C#": 2,
    "Databases": 473
  }
};

var treehousePoints = myTreehouseData.points;
var dataSet = [];

for (var item in treehousePoints) {
  if (treehousePoints.hasOwnProperty (item)) {
    dataSet.push (treehousePoints[item]);
  }
}
console.log (dataSet);

var height = 250; // set vars for height & width
var width = 600;

var yScale = d3.scale.linear ()
  .domain ([0, d3.max (dataSet) * 1.1]) // domain manually set a little higher than max
                                        // value
  .range ([0, height]); // set yScale linear
var xScale = d3.scale.ordinal () // orders
  .domain (dataSet)
  .rangeBands ([0, width], 0.25, 0.25); // (width of data), padding between, padding
                                        // outside

var svg = d3.select ('#barChart').append ('svg')
  .attr ('width', width)
  .attr ('height', height);

svg.selectAll ('rect')
  .data (dataSet)
  .enter ()
  .append ('rect')
  .attr ('class', 'bar')
  .attr ('x', function (data) {
    return xScale (data); // using xScale on data
  })
  .attr ('y', function (data) {
    return height - yScale (data); // using yScale on data
  })
  .attr ('width', xScale.rangeBand) // width determined by xScale.rangeBand
  .style ('height', function (data) {
    return yScale (data);// height determined by yScale
  });
