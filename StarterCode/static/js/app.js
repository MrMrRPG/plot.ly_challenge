// 1. Use the D3 library to read samples.json
const sample = "./samples.json";

function metadata(samples) {
  d3.json(sample).then((data) => {
    var metadata = data.metadata;

    var array = metadata.filter((samplevalue) => samplevalue.id == sample);
    var result = array[0];
    var selectsample = d3.select("#sample-metadata");

    selectsample.html("");

    //     Object.entries(result).forEach(([a, b]) => {
    //       selectsample.append("h5").text(`${a}: ${b}`);
    //     });
    Object.entries(result).forEach(([a, b]) => {
      selectsample.append("h5").text(`${a}: ${b}`);
    });
  });
}

function charts(x) {
  let data = d3.json(sample).then(function (data) {
    console.log(data);
    // 2. Create a horizontal bar chart with a dropdown menu to display the top 10
    // OTUs found in that individual.

    // Use *sample_values* as the values for the bar chart.
    // Use *otu_ids* as the labels for the bar chart.
    // USE *otu_labels* as the hovertext for the chart.

    var tempt = data.samples[0];
    console.log(tempt);

    let sampleValues = tempt.sample_values;
    let otuIDs = tempt.otu_ids;
    let otuLabels = tempt.otu_labels;

    slicedData = sampleValues.slice(0, 10);
    slicedIDs = otuIDs.slice(0, 10);
    slicedLabels = otuLabels.slice(0, 10);
    // slicedData = sampleValues.slice(0, 10);

    slicedIDs = slicedIDs.map((L) => "otu" + L);
    slicedData.reverse();

    let trace1 = {
      x: slicedData,
      y: slicedIDs,
      type: "bar",
      orientation: "h",
      text: slicedLabels,
    };

    let bar1 = [trace1];

    let layout = {
      title: "OTU Status",
    };

    Plotly.newPlot("bar", bar1, layout);

    // 3. Create a bubble char that displays each sample.
    let trace2 = {
      y: sampleValues,
      x: otuIDs,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIDs,
      },
      text: slicedLabels,
    };

    let bubble = [trace2];

    let layout2 = {
      title: "Individual OTU",
    };

    Plotly.newPlot("bubble", bubble, layout2);

    // 4. Display the sample metadata; i.e., an individual's demographic info.
  });
}

function init() {
  var menu = d3.select("#selDataset");

  d3.json(sample).then((data) => {
    var DataNames = data.names;
    DataNames.forEach((sample) => {
      menu.append("option").text(sample);
    });

    const Sample = DataNames[0];
    charts(Sample);
    metadata(Sample);
  });
}

function optionChanged(newSample) {
  charts(newSample);
  metadata(newSample);
}

init();

// console.log(data)
