// 1. Use the D3 library to read samples.json
const samples = "./samples.json";

d3.json(samples).then(function(data1){
	console.log(data1)
});

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10
// OTUs found in that individual.

// Use *sample_values* as the values for the bar chart.
// Use *otu_ids* as the labels for the bar chart.
// USE *otu_labels* as the hovertext for the chart.
// function values(samples){
// 	return samples.sample_values;
// }
// let sample_values = data.filter(values);

var sv = Object.values(data1.sample_values)

// let trace1 ={
// 	x: ,
// 	y: ,
// 	type: 'bar'
// }
// let data = [trace1]

// Plotly.newPlot("plot", data, layout)