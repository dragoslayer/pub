function onSubmit(){
console.log("yui");
if(ValidateFN() && ValidateUN() && ValidationPhone() && ValidatePWD() && ValidatePWD2()){
console.log("yuj");
}
else{
return none;
}
}

function ValidateFN(){

    isValid=true;
var error=document.getElementById("errorFN");
    if((document.getElementById("fullname").value=="") || (document.getElementById("fullname").value.length<8) || (document.getElementById("fullname").value.length>16)) {

       error.textContent="Characters should be more than 8";
        error.style.color="red";

        isValid=false;

        document.getElementById("fullname").classList.remove("hide");

    }


else{

        isValid=true;

        if(!document.getElementById("fullname").classList.contains("hide"))

        document.getElementById("fullname").classList.add("hide");

    }

    return isValid;

}





function ValidateUN(){

    var error=document.getElementById("errorUN");
    isValid=true;
    if((document.getElementById("username").value=="")) {
        error.textContent="Please enter a text";
        error.style.color="red";
        isValid=false;
        document.getElementById("username").classList.remove("hide");
 }

   else if(document.getElementById("username").value.length<8){
  isValid=false;
  error.textContent="Please enter characters more than 8";
  error.style.color="red";
}
  else if(document.getElementById("username").value.length>50){
  error.textContent="Please enter characters less than 50";
        error.style.color="red";
        isValid=false;
}

else{

        isValid=true;

        if(!document.getElementById("username").classList.contains("hide"))

        document.getElementById("username").classList.add("hide");

    }

    return isValid;

    }





function ValidationPhone(){
var error=document.getElementById("errorNum");
isValid=true;
if(document.getElementById("phonenumber").value.length!=10){
error.textContent="Phone Number must be 10 digits";
        error.style.color="red";
        isValid=false;
        document.getElementById("phonenumber").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("phonenumber").classList.contains("hide"))

        document.getElementById("phonenumber").classList.add("hide");

    }

    return isValid;

    }






function ValidatePWD(){
var error=document.getElementById("errorPwd1");
isValid=true;
if(document.getElementById("password").value.length<8){
error.textContent="Password must be more than 8 characters";
        error.style.color="red";
        isValid=false;
        document.getElementById("password").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("password").classList.contains("hide"))

        document.getElementById("password").classList.add("hide");

    }

    return isValid;

    }





function ValidatePWD2(){
var error=document.getElementById("errorPwd2");
isValid=true;

if(document.getElementById("password").value!=document.getElementById("password2").value){
error.textContent="Password must match";
        error.style.color="red";
        isValid=false;
        document.getElementById("password2").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("password2").classList.contains("hide"))

        document.getElementById("password2").classList.add("hide");

    }

    return isValid;

    }

