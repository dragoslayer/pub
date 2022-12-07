var genderbutton="";

function onSubmit() {

  if (

    ValidateFN() &&

    ValidateUN() &&

 ValidateEmail()&&

    ValidationPhone() &&

    ValidatePWD() &&

    ValidatePWD2()&&

    ValidateGender()  

  

  ) {

alert("Thanks for Register");

  } else {

    return 0;

console.log("hgey");

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

    document.getElementById("fullname").classList.remove("hide");

  } else if (!correct_way.test(document.getElementById("fullname").value)) {

    error.textContent = "Please enter alphabets only";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

    error.textContent="";

    

  }

  return isValid;

}

function ValidateUN() {

  var error = document.getElementById("errorUN");

  isValid = true;

  if (document.getElementById("username").value == "") {

    error.textContent = "Please enter a text";

    error.style.color = "red";

    isValid = false;

  } else if (document.getElementById("username").value.length > 15) {

    error.textContent = "Please enter characters less than 15";

    error.style.color = "red";

    isValid = false;

  } else {

    isValid = true;

 error.textContent="";

  }

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

  

  }

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

  return isValid;

}

function ValidatePWD2() {

  var error = document.getElementById("errorPwd2");

  isValid = true;

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

  

  }

  

  

  function CLicked(i){

  genderbutton=document.getElementById(i).value;

  }

function ValidateEmail(){

var error=document.getElementById("Erroremail");

isValid=true;

console.log("yooo");

if(((document.getElementById("eemail").value).includes('@') && (document.getElementById("eemail").value).includes('.')))

{isValid=true;

error.textContent="";

}

else{

error.textContent="Enter a proper email";

          error.style.color="red";

          isValid=false;

}

}
