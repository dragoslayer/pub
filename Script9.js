var genderbutton="";

var selectedRow=null;

isValid="True";

var genderTag="";

function onSubmit() {

 

    

  if (ValidateFN() && ValidateUN() &&

    ValidationPhone() &&

    ValidatePWD() &&

    ValidatePWD2()&&

    ValidateGender() 

   

  ) {

 var formData=readFormData();

  if (selectedRow==null){

    

    insertNewRecord(formData);

  }else{

    updateRecord(formData);

 }

var x=document.getElementById("storeList");

x.style.display ==="block";

  document.getElementById("maleB").checked=false;

  document.getElementById("femaleB").checked=false;

  document.getElementById("ntsB").checked=false;

  resetForm(); 

  document.getElementsByTagName("span")="";

  

  } else {

    return 0;

  }

}

function ValidateFN() {

  isValid = true;

  var error = document.getElementById("errorFN");

  var correct_way = /^[A-Za-z+_]*$/;

  if (

    document.getElementById("fullname").value == "" ||

    document.getElementById("fullname").value.length > 50

  ) {

    error.textContent = "Please enter characters less than 50";

    error.style.color = "red";

    isValid = false;

  } else if (!correct_way.test(document.getElementById("fullname").value)) {

    error.textContent = "Please enter alphabets only";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

   error.textContent="";

  }

console.log(isValid+"FN");

  return isValid;

}

function ValidateUN() {

  var error = document.getElementById("errorUN");

  isValid = true;

  if (document.getElementById("username").value == "") {

    error.textContent = "Please enter a text";

    // error.style.color = "red";

     isValid = false;

  } else if (document.getElementById("username").value.length > 15) {

    error.textContent = "Please enter characters less than 15";

    // error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

    error.textContent="";

  }

console.log(isValid+"UN");

  return isValid;

}

function ValidationPhone() {

  var error = document.getElementById("errorNum");

  isValid = true;

  if (document.getElementById("phonenumber").value.length != 10) {

    error.textContent = "Phone Number must be 10 digits";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

    error.textContent="";

  }console.log(isValid+"phN");

  return isValid;

}

function ValidatePWD() {

  var error = document.getElementById("errorPwd1");

  isValid = true;

  if (document.getElementById("password").value.length < 8) {

    error.textContent = "Password must be more than 8 characters";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

    error.textContent="";

  }

console.log(isValid+"PWD1");

  return isValid;

}

function ValidatePWD2() {

  var error = document.getElementById("errorPwd2");

  isValid = true;

  console.log(document.getElementById("password").value);

  console.log(document.getElementById("password2").value);

  if (

    document.getElementById("password").value !=

    document.getElementById("password2").value

  ) {

    error.textContent = "Password must match";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

    error.textContent="";

  }

console.log(isValid+"Pwd2");

  return isValid;

}

function ValidateGender(){

  var error=document.getElementById("Errorgender");

  if(genderbutton==""){

  error.textContent="Select a Gender";

          error.style.color="red";

          isValid=false;

  }

  else{

  isValid=true;

  error.textContent="";

  }

console.log(isValid+"Gnder");

  return isValid;

}

  

  function CLicked(i){

  genderbutton=document.getElementById(i).value;

  }

function emailvalidate(){

//var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var error=document.getElementById("Erroremail");

if((document.getElementById("email").value).includes('@','.'))

{

isValid=false;

error.textContent="";

}

else{

error.textContent="Enter a proper email";

    error.style.color="red";

    isValid=false;

}

console.log(isValid+"Email");

return isValid;

}

/*

function validateEmail(){

  var error=document.getElementById("Erroremail");

  isValid=true;

  if(((document.getElementById("eemail").value).includes('@')&&(document.getElementById("eemail").value).includes('.')

  ))

  {isValid=true;

  error.textContent="";

}

  else{

    error.textContent="Enter a proper email";

    error.style.color="red";

    isValid=false;

  }

console.log(isValid+"Email");

return isValid;

}

*/

  function readFormData() {

    var formData = {};

    formData["fullname"] = document.getElementById("fullname").value;

    formData["username"] = document.getElementById("username").value;

    formData["phonenumber"] = document.getElementById("phonenumber").value;

    formData["password"] = document.getElementById("password").value;

    formData["password2"] = document.getElementById("password2").value;

    return formData;

}

function insertNewRecord(data) {

    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);

		cell1.innerHTML = data.fullname;    cell2 = newRow.insertCell(1);

		cell2.innerHTML = data.username;

    cell3 = newRow.insertCell(2);

		cell3.innerHTML = data.phonenumber;

    cell4 = newRow.insertCell(3);

		cell4.innerHTML = data.password;

    cell5 = newRow.insertCell(4);

		cell5.innerHTML = data.password2;

    

    cell5 = newRow.insertCell(5);

        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>`

cell6= newRow.insertCell(6);

        cell6.innerHTML= `<button onClick="onDelete(this)" id="delete">Delete</button>`;

cell7= newRow.insertCell(7);

cell7.innerHTML=genderbutton;

}

function onEdit(td) {

  selectedRow = td.parentElement.parentElement;

  document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;

  document.getElementById("username").value = selectedRow.cells[1].innerHTML;

  document.getElementById("phonenumber").value = selectedRow.cells[2].innerHTML;

 document.getElementById("password").value = selectedRow.cells[3].innerHTML;

 document.getElementById("password2").value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {

  selectedRow.cells[0].innerHTML = formData.fullname;

  selectedRow.cells[1].innerHTML = formData.username; 

  selectedRow.cells[2].innerHTML = formData.phonenumber;

  selectedRow.cells[3].innerHTML = formData.password;

  selectedRow.cells[4].innerHTML = formData.password2;

}

function onDelete(td) {

   (confirm('Do you want to delete this record?')) 

      row = td.parentElement.parentElement;

      document.getElementById('storeList').deleteRow(row.rowIndex);

      resetForm();

  

}

function resetForm() {

  document.getElementById("fullname").value = '';

  document.getElementById("username").value = '';

  document.getElementById("phonenumber").value = '';

  document.getElementById("password").value = '';

  document.getElementById("password2").value = '';

  selectedRow = null;

}
