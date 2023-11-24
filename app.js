let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("emailUser");
let password = document.getElementById("passWord");
let emptyTextField = document.getElementById("infoDisplay");

let readMore = document.getElementById("readMore");

let stName = document.getElementById("studentName");
let stID = document.getElementById("studentID");
let stDep = document.getElementById("studentDep");
let stTerm = document.getElementById("semesterTerm");
let tableInsertion = document.getElementById("tableInsertion");
let tableDisplay = document.getElementById("TableColumns");
function saveAndDisplay() {
  emptyTextField.style.display = "block";
  emptyTextField.innerHTML += `<div>
    <h1 style="text-align: center; color: #686A6C; text-decoration : underline;">Information</h1>
    <p><b>First Name :</b> ${firstName.value}</p>
<br/>
<p><b>Last Name :</b> ${lastName.value}</p>
<br/>
<p><b>Email :</b> ${email.value}</p>
</div>`;
}

function displayInformation() {
  readMore.innerHTML =
    "This is a new Mobile Phone Which Has Futuristic features in it. It has AI technology Integrated in it which can help to enhance user Experience according to your preferences and it has 8Gb of Ram with 1TB of Storage and has an Amazing and spectacular performance !";
}

function onDelete(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function onEdit(button) {
  let inputName = prompt("Enter your Name:");
  let inputId = prompt("Enter your ID : ");
  let inputDep = prompt("Enter your Department : ");
  let inputTerm = prompt("Enter your Term : ");

  let row = button.parentNode.parentNode;

  let studentName = row.querySelector("td:nth-child(1)");
  let studentID = row.querySelector("td:nth-child(2)");
  let studentDep = row.querySelector("td:nth-child(3)");
  let studentTerm = row.querySelector("td:nth-child(4)");

  if (studentName) {
    studentName.textContent = inputName;
  }
  if (studentID) {
    studentID.textContent = inputId;
  }
  if (studentDep) {
    studentDep.textContent = inputDep;
  }
  if (studentTerm) {
    studentTerm.textContent = inputTerm;
  }
}

function insertTable() {
  tableDisplay.style.display = "block";
  tableInsertion.innerHTML += `
      <tr>
        <td>${stName.value}</td>
        <td>${stID.value}</td>
        <td>${stDep.value}</td>
        <td>${stTerm.value}</td>
        <td><button onclick = "onDelete(this)">Delete</button><button onclick = "onEdit(this)">Edit</button></td>
      </tr>
    `;
}
