var genderbutton="";
function onSubmit(){
if(ValidateFN() && ValidateUN() && ValidationPhone() && ValidatePWD() && ValidatePWD2() && ValidateGnder()){

}
else{

return 0;
}
}

function ValidateFN(){

    isValid=true;
var error=document.getElementById("errorFN");


function onlyLetters(str){
return /^[A-Za-z+_]*$/.test(str);
}



    if((document.getElementById("fullname").value=="") || 
             
                  (document.getElementById("fullname").value.length>50)) 
{

       error.textContent="Characters should be more than 8";
        error.style.color="red";

        isValid=false;

        


 }


if(!onlyLetters(document.getElementById("fullname").value)){

error.textContent="Enter Characters";
        error.style.color="red";
isValid=false;

}

else{

        isValid=true;
error.textContent="";

        
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

       error.textContent="";

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
        
}
else{

        isValid=true;
error.textContent="";

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
        
}
else{

        isValid=true;

        error.textContent="";

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
        
}
else{

        isValid=true;

      error.textContent="";

    }

    return isValid;

    }

function ValidateGnder(){
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
