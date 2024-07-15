// Select the form element and add an event listener for submit
// Select the form element and add an event listener for submit
const form = document.getElementById("attendanceForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Get the input values from the form
  const name = document.getElementById("name").value;
  const date = new Date().toLocaleDateString();

  // Create a new row in the attendance table
  const table = document.getElementById("attendanceTable");
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const dateCell = row.insertCell(2);

  // Set the values of the new row cells
  nameCell.innerHTML = name;
  dateCell.innerHTML = date;

  // Reset the form
  form.reset();

  // Copy the table contents to the clipboard
  const tableContent = table.outerHTML;
  navigator.clipboard.writeText(tableContent)
    .then(() => console.log('Table contents copied to clipboard'))
    .catch(err => console.error('Failed to copy table contents: ', err));
});
