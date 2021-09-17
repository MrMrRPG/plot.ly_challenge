// 1. Use the D3 library to read samples.json
const samples = "./samples.json";

d3.json(samples).then(function(data){
	console.log(data)
});