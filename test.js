var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();

  if (selectedRow == null) insertNewRecord(formData);
  else resetForm();
}
// }

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  // window.localStorage.setItem("text", fieldvalue);
  formData["email"] = document.getElementById("email").value;
  // window.localStorage.setItem("email", fieldvalue);
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}

//function
function fruit(apple, orange) {
  const juice = `Apple ${apple} and orange ${orange}`;
  return juice;
}
const applejuice = fruit(5, 4);
console.log(applejuice);
function calage(birthyear) {
  const age = 2022 - birthyear;
  return age;
}
const age1 = calage(1999);
console.log(age1);

//arrow function

const calage1 = (birthyear, name) => {
  const age = 2022 - birthyear;
  const retirment = 70 - age;
  return `${name} retire in ${retirment}`;
};
console.log(calage1(1999, "hetika"));
console.log(calage1(2003, "dev"));
