const emailEle = document.getElementById("inputEmail4");
const emailErrEle = document.getElementById("emailErr");
const passwordEle = document.getElementById("inputPassword4");
const passwordErrEle = document.getElementById("passwordErr");

function validate(){
    let emailRegex = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(emailEle.value == ""){
        passwordErrEle.hidden = true;
        emailErrEle.hidden = false;
        emailErrEle.innerText = "Email cannot be empty ";
        return false;
        
    }else if(passwordEle.value == ""){
        emailErrEle.hidden = true;
        passwordErrEle.hidden = false;
        passwordErrEle.innerText = "Password cannot be empty ";
        return false;
    }else if ( emailRegex.test(emailEle.value)){
        
        if(passwordEle.value.length >= 8){
            passwordErrEle.hidden = true;
            return true;
        }
        emailErrEle.hidden = true;
        passwordErrEle.hidden = false;
        passwordErrEle.innerHTML = "Incorrect password length"
        return false;
    }else{
        passwordErrEle.hidden = true;
        emailErrEle.hidden = false;
        emailErrEle.innerText = "Incorrect email";
        return false;
    }
}