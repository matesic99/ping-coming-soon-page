const inputElement = document.querySelector(".input");
const submitBUtton = document.querySelector('.notify_me')
const errMsg = document.querySelector('.error_msg');

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errMsg.style.display = "none";
}, 2500);




submitBUtton.addEventListener("click", function () {
  if (inputElement.value.length === 0) {
    errMsg.style.display = "inline";
    errMsg.textContent = "Whoops! It looks like you forgot to add your email";
    timeoutFunc;
  } else if (
    !inputElement.value.match(emailValidation) &&
    inputElement.value.length !== 0
  ) {
    errMsg.style.display = "inline";
    errMsg.textContent = "Please provide a valid email address";
    timeoutFunc;
  } else {
    errMsg.style.display = "inline";
    errMsg.style.color = "green";
    errMsg.textContent = "We sent you a gift, check it out!";
    timeoutFunc;
  }
});

