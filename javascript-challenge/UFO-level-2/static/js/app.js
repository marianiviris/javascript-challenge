var tableData = data;

var tbody = d3.select("table>tbody");
var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");

var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#city");    

var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#state");

var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#country");

var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shape");

data.forEach(obj => {
    var tRow = tbody.append("tr");
    Object.entries(obj).forEach(([key,value]) => {
        var tData = tRow.append("td");
        tData.text(value);
    });
});

var submitButton = d3.select("#filter-btn");


// LEVEL 2: OPTIONAL 

submitButton.on("click", function() {       
    tbody.html("");
    d3.event.preventDefault();
    var inputField = d3.select("#datetime").property("value");
    var inputTypeArray = data.filter(one => one.datetime === inputField);   
    inputTypeArray.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});

citysubmitButton.on("click", function() {   
    tbody.html("");
    d3.event.preventDefault();
    var cityinputElement = d3.select("#city").property("value");
    var cityinputTypeArray = data.filter(two => two.city === cityinputElement); 
    cityinputTypeArray.forEach((selects) => {
        var Crow = tbody.append("tr");
        Object.entries(selects).forEach(([key,value]) => {
            var Ccell = Crow.append("td");
            Ccell.text(value);
        });
    });      
});

statesubmitButton.on("click", function() {     
    tbody.html("");
    d3.event.preventDefault();
    var stateinputElement = d3.select("#state").property("value");
    var stateinputTypeArray = data.filter(three => three.state === stateinputElement);
    stateinputTypeArray.forEach((selectss) => {
        var Srow = tbody.append("tr");
        Object.entries(selectss).forEach(([key,value]) => {
            var Scell = Srow.append("td");
            Scell.text(value);
        });
    });      
});

countrysubmitButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var countryinputElement = d3.select("#country").property("value");
    var countryinputTypeArray = data.filter(four => four.country === countryinputElement);
    countryinputTypeArray.forEach((selectsc) => {
        var Corow = tbody.append("tr");
        Object.entries(selectsc).forEach(([key,value]) => {
            var Cocell = Corow.append("td");
            Cocell.text(value);
        });
    });      
});

shapesubmitButton.on("click", function() {       
    tbody.html("");
    d3.event.preventDefault();
    var shapeinputElement = d3.select("#shape").property("value");
    var shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement); 
    shapeinputTypeArray.forEach((selectsh) => {
        var Shrow = tbody.append("tr");
        Object.entries(selectsh).forEach(([key,value]) => {
            var Shcell = Shrow.append("td");
            Shcell.text(value);
        });
    });      
});
