var selectedRow = null;

function onFormSubmit() {
  var formdata = readformdata();
  insertformdata(formdata);
  if (selectedRow == null) insertformdata(formdata);
  else resetform();
}

function readformdata() {
  var formdata = {};
  formdata["fullname"] = document.getElementById("fullName").value;
  formdata["email"] = document.getElementById("email").value;
  formdata["salary"] = document.getElementById("salary").value;
  formdata["city"] = document.getElementById("city").value;
  return formdata;
}

function insertformdata(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.email;
  cell1 = newRow.insertCell(2);
  cell1.innerHTML = data.salary;
  cell1 = newRow.insertCell(3);
  cell1.innerHTML = data.city;
  cell1 = newRow.insertCell(4);
  cell1.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                   <a>Delete</a>`;
}

function resetform() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow == null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updaterecords(formdata) {
  selectedRow.cells[0].innerHTML = formdata.fullname;
  selectedRow.cells[1].innerHTML = formdata.email;
  selectedRow.cells[2].innerHTML = formdata.salary;
  selectedRow.cells[3].innerHTML = formdata.city;
}

function ondelete(td) {
  if (confirm("If delete the Recordes or not ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetform();
  }
}
