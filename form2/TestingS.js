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
    if((document.getElementById("fullName").value=="") || (document.getElementById("fullName").value.length<8) || (document.getElementById("fullName").value.length>16)) {

       error.textContent="Characters should be more than 8";
        error.style.color="red";

        isValid=false;

        document.getElementById("fullName").classList.remove("hide");

    }


else{

        isValid=true;

        if(!document.getElementById("fullName").classList.contains("hide"))

        document.getElementById("fullName").classList.add("hide");

    }

    return isValid;

}





function ValidateUN(){
console.log("erroe2");
    var error=document.getElementById("errorUN");
    isValid=true;
    if((document.getElementById("userName").value=="")) {
        error.textContent="Please enter a text";
        error.style.color="red";
        isValid=false;
        document.getElementById("userName").classList.remove("hide");
 }

   else if(document.getElementById("userName").value.length<8){
  isValid=false;
  error.textContent="Please enter characters more than 8";
  error.style.color="red";
}
  else if(document.getElementById("userName").value.length>50){
  error.textContent="Please enter characters less than 50";
        error.style.color="red";
        isValid=false;
}

else{

        isValid=true;

        if(!document.getElementById("userName").classList.contains("hide"))

        document.getElementById("userName").classList.add("hide");

    }

    return isValid;

    }



/*function Email(){
let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log( res.test(email));
}
*/

function ValidationPhone(){
var error=document.getElementById("errorNum");
isValid=true;
if(document.getElementById("phoneNumber").value.length!=10){
error.textContent="Phone Number must be 10 digits";
        error.style.color="red";
        isValid=false;
        document.getElementById("userName").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("phoneNumber").classList.contains("hide"))

        document.getElementById("phoneNumber").classList.add("hide");

    }

    return isValid;

    }






function ValidatePWD(){
var error=document.getElementById("errorPwd1");
isValid=true;
if(document.getElementById("passWord").value.length<8){
error.textContent="Password must be more than 8 characters";
        error.style.color="red";
        isValid=false;
        document.getElementById("passWord").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("passWord").classList.contains("hide"))

        document.getElementById("passWord").classList.add("hide");

    }

    return isValid;

    }





function ValidatePWD2(){
var error=document.getElementById("errorPwd2");
isValid=true;
console.log(document.getElementById("passWord").value);
console.log(document.getElementById("passWord2").value);
if(document.getElementById("passWord").value!=document.getElementById("passWord2").value){
error.textContent="Password must match";
        error.style.color="red";
        isValid=false;
        document.getElementById("passWord2").classList.remove("hide");
}
else{

        isValid=true;

        if(!document.getElementById("passWord2").classList.contains("hide"))

        document.getElementById("passWord2").classList.add("hide");

    }

    return isValid;

    }

