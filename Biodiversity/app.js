var url = "./samples.json";

// 1. declare initiation function
// select dropdown
// use D3 to get json from data source
// access the data
// create dropdown option for each sample id

function init() {

  var dropdownMenu = d3.select("#selDataset");

  d3.json(url).then((response) => {

    var namesArr = response.names;
    var metArr = response.metadata;
    var samplesArr = response.samples;

    namesArr.forEach(testSub => {
      d3.select("#selDataset").append("option").text(`${testSub}`);
    });

    var newSample = namesArr[0];
    let metObj = metArr.filter(obj => obj.id == newSample);
    let samplesObj = samplesArr.filter(obj => obj.id == newSample);
    
    var myObj = {};
    myObj.id = newSample;
    myObj.metadata = metObj[0];
    myObj.samples = samplesObj[0];
    
    updateVisuals(myObj);

  });

}

// 2. declare sampleSelected function
// select dropdown
// event handler: on change of select attr "value" do the following
// use D3 to get data
// access data
// updateVisuals

// 3. declare updateVisuals function
// bar chart
// bubble chart
// metadata
 


// 4. initialize page with first sample
init();

function updateVisuals(myObj) {

  //console.log(myObj.id);
  //console.log(myObj.metadata);
  //console.log(myObj.samples);
  //console.log(myObj.samples.otu_ids);
  //console.log(myObj.samples.sample_values);
  //let testArr = myObj.samples.otu_ids.slice(0,10);
  //console.log(testArr);
  var otuArr = myObj.samples.otu_ids.slice(0,10);
  var otuStrArr = [];
  otuArr.map(otu => {
    var strOTU = `OTU ${String(otu)}`;
    otuStrArr.push(strOTU);
  });

  var barTrace = {
    type: "bar",
    x: myObj.samples.sample_values.slice(0,10),
    y: otuStrArr,
    labels: myObj.samples.otu_ids.slice(0,10),
    text: myObj.samples.otu_labels.slice(0,10),
    orientation: "h"
  }

  var data = [barTrace];

  var layout = {
    title: `Top 10 OTUs in Subject ${myObj.id}`,
    xaxis: {title:"OTU Population (arb.)"},
    yaxis: {title:""},
    bargap: 0.1
  };

  Plotly.newPlot("bar", data, layout);

  var bubbleTrace = {
    type
  }
} 


  //select dropdown
  //get value (test subject id number)
  //filter data objects to select the ones with the correct subject id
  //



  //id: integer
  //ethnicity: string
  //gender: string
  //age: integer
  //location: string
  //bbtype: string
  //wfreq: integer
  //OR NULL

// user selects test subject id number
//d3.select("#selDataset").select("value").on("change", testFunc());
// d3.select("#selDataset").select("value").on("change", updatePlotly);


/*
Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
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