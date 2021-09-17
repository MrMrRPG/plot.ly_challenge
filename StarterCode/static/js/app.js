// 1. Use the D3 library to read samples.json
const sample = './samples.json';

let data = d3.json(sample).then(function(data){
	console.log(data)
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10
// OTUs found in that individual.

// Use *sample_values* as the values for the bar chart.
// Use *otu_ids* as the labels for the bar chart.
// USE *otu_labels* as the hovertext for the chart.
var sample_values = Object.values(data.sample_values);
var otu_ids = Object.values(data.otu_ids);
var otu_labels = Object.values(data.otu_labels);

});


console.log(data)

// var sv = Object.values(sample.sample_values)

// let trace1 ={
// 	x: ,
// 	y: ,
// 	type: 'bar'
// }
// let data = [trace1]

// Plotly.newPlot("plot", data, layout)