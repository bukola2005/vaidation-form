const form = document.getElementById('form');
const  username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// show input error message
function showError(input ,message ) {
  console.log("sdd")
  const formControl = input.parentElement;
  formControl.className = 'form-control error'; 
  const small = formControl.querySelector('small');
  small.innerText = message;
}
// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// check email is vaild
//  function isValidEmail(email) {
//   const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   return re.test(String(email).toLowerCase());
//  }

function checkEmail(input) {
  const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  }else{
    showError(input,'Email is not vaild');
  }
}

//  check requried filed
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldiName(input)}is required`);
    }else{
      showSuccess(input);
    }
  });
}

// check input length
function checkLength(input,min,max){
if (input.value.length < min){
  showError(input,`${getFieldiName(input)} must  be at least ${min} charcater`);
}else if(input.value.length > max){
  showError(input,`${getFieldiName(input)} must be less than ${max} characters`);
}else{
  showSuccess(input);
}
}

// check password match

function  checkPaswwordMatch(input1,input2) {
  if (input1.value !== input2.value) {
    showError(input2,'passwords do not match');
  }
}

// get filedname
function  getFieldiName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listeners
form.addEventListener('submit',function(e) {
  e.preventDefault();

  checkRequired([username,email,password,password2]);

  checkLength(username ,3 ,15);
  checkLength(password, 6,25);
  checkEmail(email);
  checkPaswwordMatch(password,password2);

  // console.log(username.value);

  // if (username.value == '') {
  //   showError(username,"username is required");
  // }
  // else{
  //   showSuccess(username);
  // }

  // if (email.value == '') {
  //   showError(email,"email is required");
  // }else if(!isValidEmail(email.value)){
  //   showError(email,"email is not vaild")
  // }
  // else{
  //   showSuccess(email);
  // }

  // if (password.value == '') {
  //   showError(password,"password is required");
  // }
  // else{
  //   showSuccess(password);
  // }
  // if (password2.value == '') {
  //   showError(password2,"password 2 is required");
  // }
  // else{
  //   showSuccess(password2);
  // }
});

