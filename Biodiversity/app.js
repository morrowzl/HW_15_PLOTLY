/*
1. use D3 to read in the data from samples.json
*/
var url = "./samples.json";

function init() {

  var dropdownMenu = d3.select("#selDataset");

  d3.json(url).then((response) => {

    var namesArr = response.names;
    var metArr = response.metadata;
    var samplesArr = response.samples;

    namesArr.forEach(testSub => {
      d3.select("#selDataset").append("option").text(`${testSub}`);
    });

    var zerothSample = namesArr[0];

    let matchobjArr = samplesArr.filter(obj => obj.id == zerothSample);

    //update charts and metadata by calling functions and passing zerothSample
    //functions: updateCharts, updateMeta
  });

}

init();


//let newsubjectArr = samplesArr.map(sampleObject.id == newSubject, => a.foo);

/*
function updateCharts(newSubject) {

  var trace1 = {
    type: "bar",
    x: 
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: 
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    labels: 
    //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    text: 
    //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    orientation: "h"
  }

  var data = [trace1];

  var layout = {
    title: "test title",
    xaxis: {title:"test xaxis title"},
    yaxis: {title:"test yaxis title"}
  };

  Plotly.newPlot("bar", data, layout);
}
}

//function updateMeta(newValue) {}

function optionChanged(newValue) {

  var trace1 = {
    type: "bar",
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    text: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    orientation: "h"
  }

  var data = [trace1];

  var layout = {
    title: "test title",
    xaxis: {title:"test xaxis title"},
    yaxis: {title:"test yaxis title"}
  };

  Plotly.newPlot("bar", data, layout);
}

// user selects test subject id number
//d3.select("#selDataset").select("value").on("change", testFunc());
// d3.select("#selDataset").select("value").on("change", updatePlotly);

// d3.select("#selDataset").selectAll("option").remove();

// function optionChanged(value) {
//}
*/
  /*
  2. Create a horizontal bar chart with a dropdown menu to display 
  the top 10 OTUs found in that individual.
  */
  
//  var x = [];
//  var y = [];

//  var selectedOption = dropdownMenu.value;

//  var subjectId = selectedOption;
  //alternative var subjectId = d3.select("#selDataset").html(this.value);

//  var subjectBacteria = samplesArr[i].otu_ids.slice(0,10)
  /*where samplesArr.[object_i].id == subjectId*/

//  var bacteriaValues = samplesArr[i].sample_values.slice(0,10);

//  var bacteriaLabels = samplesArr[i].otu_labels.slice(0,10);

  // needs to be for specific test subject selected by user in dropdown
  // WHERE/FOR 
  //userInput [some number string like "940"] == samplesArr[i].id 

  /*  var trace1 = {
    type: "bar",
    // top 10 OTUs for single individual
    x: subjectBacteria,
    y: bacteriaValues,
    labels: subjectBacteria,
    text: bacteriaLabels,
    orientation: "h"
  };

  var data = [trace1];

  var layout = {
    title: "test title",
    xaxis: {title:"test xaxis title"},
    yaxis: {title:"test yaxis title"}
  };

  Plotly.newPlot("bar", data, layout);


});
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

/*
function init() {
  var trace1 = {
    type: "bar",
    x: [],
    y: [],
    orientation: "h",
    labels: [],
    text: []
  };

  var data = [trace1];
  
  Plotly.newPlot("bar", data);
}
*/


/*
Create a bubble chart that displays each sample
*/
/*
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  marker: {
    size: [40, 60, 80, 100]
  }
};

var data = [trace1];

var layout = {
  title: 'Marker Size',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot("bubble", data, layout);

/*
4. Display the sample metadata, 
i.e., an individual's demographic information
*/

/*
5. Display each key-value pair from the 
metadata JSON object somewhere on the page
*/

/*
6. Update all of the plots any time a new sample is selected
*/

/*
  console.log("namesArr is an array of number strings");
  console.log(namesArr.slice(0,10));
  console.log("");
  console.log("metArr is an array of objects whose property values are integers, strings, or null");
  console.log(metArr.slice(0,10));
  console.log("");
  console.log("samplesArr is an array of objects whose property values are strings or another array");
  console.log(samplesArr.slice(0,10));
  console.log("");
  console.log("the properties samplesArr.someObject.id values are one number string");
  console.log("the properties samplesArr.someObject.otu_ids values are one array of multiple integers");
  console.log("the properties samplesArr.someObject.sample_values values are one array of multiple integers");
  console.log("the properties samplesArr.someObject.otu_labels values are one array of multiple multi-word strings whose constituents are separated by semicolons");
*/