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