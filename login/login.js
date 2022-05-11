//Toggle from login to sign up

$(".message a").click(function () {
  if ($(".register").css("display") == "none") {
    $(".login").slideToggle();
    $(".register").slideToggle();
  }
  else {
    $(".register").slideToggle();
    $(".login").slideToggle();
  }
});
// $(".message a").click(function () {
//     $("form").animate({ height: "toggle"}, "slow");
//   });


//form validation:

const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  const small = formControl.querySelector("small");
  console.log(small);
  small.innerText = message;
  formControl.classList.add("error");
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}
function isEmail(emailvalue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailvalue);
}

function checkInputs() {
  const namevalue = username.value.trim();
  const passwordvalue = password.value.trim();
  const password2value = password2.value.trim();
  const emailvalue = email.value.trim();

  if (namevalue === '') {
    setErrorFor(username, "Username cannot be blank");
  }
  else {
    setSuccess(username);
  }

  if (emailvalue === '') {
    setErrorFor(email, "Email cannot be blank");
  }
  else if (!isEmail(emailvalue)) {
    setErrorFor(email, "Email is not valid");
  }
  else {
    setSuccess(email)
  }
  if (passwordvalue === ''){
    setErrorFor(password, "Password cannot be blank");
  }
  else{
    setSuccess(password)
  }
  if (password2value === ''){
    setErrorFor(password2, "Password cannot be blank");
  }
  else if (password2value !== passwordvalue){
    setErrorFor(password2, "Passwords do not match");
  }
  else{
    setSuccess(password2)
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});
