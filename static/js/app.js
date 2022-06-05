// import the data from data.js
const tableData = data;
// Reference the HTML table using d3

var tbody = d3.select("tbody");
// With this code, we:
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

function buildTable(data) {
    // First, clear out any existing data 
    tbody.html("");

    // Next, loop through each object in the data 
    // and append a row and cells for each value in the row 
data.forEach((dataRow) => {
    // append the row to the table body
    let row = tbody.append("tr");

    // loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// tells the code what to do when an event occurs
// (such as someone clicking a filter button)
function handleClick() { 
    // we need to create a couple of variables to hold our date data, 
    // both filtered and unfiltered.
    let date = d3.select("#datetime").property("value");
    // Our default filter will actually be the original table data 
    // because we want users to refine their search on their own terms
    let filteredData = tableData;
    
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
// how does the code know when a click happens
// Our selector string contains the id for another HTML tag
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
