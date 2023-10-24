mydata = [
    {
      username: "vsm",
      email: "vaishnavivaishu5678@gmail.com",
      password: "12345",
    },
  ]; 
  //-----------------------------------------------
  const userNameEle = document.getElementById("inputUsername4");
  const phoneNumberEle = document.getElementById("inputPhone4");
  const emailEle = document.getElementById("inputEmail4");
  const passwordEle = document.getElementById("inputPassword4");
  const rePasswordEle = document.getElementById("inputRePassword4");
  const userNameParentEle = document.getElementById("inputUsername4")
    .parentElement;
  const phoneNumberParentEle = document.getElementById("inputPhone4")
    .parentElement;
  const emailParentEle = document.getElementById("inputEmail4").parentElement;
  const passwordParentEle = document.getElementById("inputPassword4")
    .parentElement;
  const rePasswordParentEle = document.getElementById("inputRePassword4")
    .parentElement;
  const commonErrEle = document.getElementById("commonErr");
  const progressEle = document.getElementById("progress");
  let checkFlag = 0;
  let xFlag = 0;
  
  //-----------------------------------------------
  // MAIN FUNCTION
  function signUpValidate() {
    if (validateFieldNotEmpty()) {
      if (validateUserName(userNameEle)) {
        if (validatePhoneNumber(phoneNumberEle)) {
          if (validateEmail(emailEle)) {
            if (validatePassword(passwordEle)) {
              if (validateSamePassword(passwordEle, rePasswordEle)) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }
  
  //-----------------------------------------------
  // EVENT LISTNERS
  
  userNameEle.addEventListener("keyup", function (event) {
    validateUserName(userNameEle);
  });
  phoneNumberEle.addEventListener("keyup", function (event) {
    validatePhoneNumber(phoneNumberEle);
  });
  emailEle.addEventListener("keyup", function (event) {
    validateEmail(emailEle);
  });
  passwordEle.addEventListener("keyup", function (event) {
    validatePassword(passwordEle);
    if (rePasswordEle.value.length > 0) {
      validateSamePassword(passwordEle, rePasswordEle);
    }
  });
  rePasswordEle.addEventListener("keyup", function (event) {
    validateSamePassword(passwordEle, rePasswordEle);
  });
  
  // -----------------------------------------
  
  //CHECK FUNCTION
  
  function checkCircle(parentEle) {
    if (parentEle.querySelector("img") == null) {
      var node = document.createElement("IMG");
  
      node.setAttribute("src", "../KeralaTourism/assets/icon/check-circle.svg");
      node.setAttribute("alt", "Correct");
      node.setAttribute("style", "width: 2rem;");
      node.setAttribute("id", "check");
      node.setAttribute("class", "ms-2");
      parentEle.appendChild(node);
      checkFlag = 1;
    } else {
      removeCircle(parentEle);
      checkCircle(parentEle);
    }
  }
  
  //-----------------------------------------------
  //XCIRCLE FUNCTION
  
  function xCircle(parentEle) {
    if (parentEle.querySelector("img") == null) {
      var node = document.createElement("IMG");
      node.setAttribute("src", "../KeralaTourism/assets/icon/x-circle.svg");
      node.setAttribute("alt", "InCorrect");
      node.setAttribute("style", "width: 2rem;");
      node.setAttribute("id", "xcircle");
      node.setAttribute("class", "ms-2 ");
  
      parentEle.appendChild(node);
      xFlag = 1;
    } else {
      removeCircle(parentEle);
      xCircle(parentEle);
    }
  }
  
  //-----------------------------------------------
  //REMOVE CHECK TICK AND X CROSS
  
  function removeCircle(parentEle) {
    parentEle.removeChild(parentEle.lastElementChild);
  }
  
  //-----------------------------------------------
  //SETTING UP PROGRESS BAR
  
  function progressBar(parentEle, width, bgColor) {
    let w = String("width: " + width + "%");
    parentEle.removeChild(parentEle.lastElementChild);
    var node = document.createElement("DIV");
    node.setAttribute("class", "progress-bar " + bgColor);
    node.setAttribute("role", "progressbar");
    node.setAttribute("style", w);
    node.setAttribute("aria-valuenow", String(width));
    node.setAttribute("aria-valuemin", "0");
    node.setAttribute("aria-valuemax", "100");
    parentEle.appendChild(node);
  }
  
  //-----------------------------------------------
  // VALIDATING WHETHER FIELDS ARE EMPTY OR NOT
  
  function validateFieldNotEmpty() {
    if (
      userNameEle.value == "" ||
      phoneNumberEle.value == "" ||
      emailEle.value == "" ||
      passwordEle.value == "" ||
      rePasswordEle.value == ""
    ) {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>Fields cannot be empty</p>";
  
      return false;
    } else {
      return true;
    }
  }
  
  //-----------------------------------------------
  // VALIDATING USERNAME
  
  function validateUserName(userName) {
    if (userName.value.length >= 3) {
      commonErrEle.innerHTML = "<p class='text-center text-danger'></p>";
      checkCircle(userNameParentEle);
      return true;
    } else {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>UserName should be minimum 3 characters</p>";
      xCircle(userNameParentEle);
      return false;
    }
  }
  //-----------------------------------------------
  //VALIDATION PHONE NUMBER
  
  function validatePhoneNumber(inputtxt) {
    const phoneNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneNoRegex)) {
      commonErrEle.innerHTML = "<p class='text-center text-danger'></p>";
      checkCircle(phoneNumberParentEle);
      return true;
    } else {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>Phone field must contain 10 numbers</p>";
      xCircle(phoneNumberParentEle);
      return false;
    }
  }
  
  //-----------------------------------------------
  //VALIDATION EMAIL
  
  function validateEmail(inputtxt) {
    const emailRegex = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (inputtxt.value.match(emailRegex)) {
      commonErrEle.innerHTML = "<p class='text-center text-danger'></p>";
      checkCircle(emailParentEle);
      return true;
    } else {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>Invalid Email</p>";
      xCircle(emailParentEle);
      return false;
    }
  }
  
  //-----------------------------------------------
  //VALIDATION PASSWORD
  
  function validatePassword(pwString) {
    var strength = 0;
  
    strength += /[A-Z]+/.test(pwString.value) ? 1 : 0;
    strength += /[a-z]+/.test(pwString.value) ? 1 : 0;
    strength += /[0-9]+/.test(pwString.value) ? 1 : 0;
  
    switch (strength) {
      case 2:
        commonErrEle.innerHTML = "<p class='text-center text-danger'><span class='text-warning'>Medium</span>. Password must contain 1 uppercase 1 lowercase and 1 number</p>";
        progressBar(progressEle, 66.66, "bg-warning");
        progressEle.firstElementChild.textContent = "Medium";
        //progressEle.innerHTML = "<p class='text-center text-danger'>Medium</p>";
        break;
      case 3:
        commonErrEle.innerHTML = "<p class='text-center text-success'>Strong</p>";
        progressBar(progressEle, 100, "bg-success");
        progressEle.firstElementChild.textContent = "Strong";
        break;
      default:
        commonErrEle.innerHTML = "<p class='text-center text-danger'><span class='text-secondary'>Weak</span>. Password must contain 1 uppercase 1 lowercase and 1 number</p>";
        progressBar(progressEle, 33.33, "bg-secondary");
        progressEle.firstElementChild.textContent = "Weak";
        break;
    }
    if (pwString.value.length < 8) {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>Minimum 8 characters. Password must contain 1 uppercase 1 lowercase and 1 number.</p>";
      // xCircle(passwordParentEle);
      progressEle.hidden = false;
      progressBar(progressEle, 20, "bg-danger");
      progressEle.firstElementChild.textContent = "Poor";
    }
    if (pwString.value.length < 1) {
      progressEle.hidden = true;
    }
    if (strength > 2) {
      checkCircle(passwordParentEle);
      return true;
    } else {
      xCircle(passwordParentEle);
      return false;
    }
  }
  
  //-----------------------------------------------
  //VALIDATION WHETHER RETYPED PASSWORD IS SAME
  
  function validateSamePassword(pass, repass) {
    if (pass.value === repass.value) {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'></p>";
      checkCircle(rePasswordParentEle);
      return true;
    } else {
      commonErrEle.innerHTML =
        "<p class='text-center text-danger'>Not Same pass</p>";
      xCircle(rePasswordParentEle);
      return false;
    }
  }
  
  //-----------------------------------------------