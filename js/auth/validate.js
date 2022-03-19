export default initValidate;

const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']");
const password2Input = document.querySelector("input[name='password2']");

const emailValidator = document.querySelector("#email_validator");
const englishValidator = document.querySelector("#english_validator");
const numberValidator = document.querySelector("#number_validator");
const countValidator = document.querySelector("#count_validator");
const sameValidator = document.querySelector("#same_validator");

const blueCheckSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/check_b.svg";
const grayCheckSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/check_gray.svg";

function validateEmail(e) {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailReg.test(emailInput.value)) {
    emailValidator.classList.add("valid");
    emailValidator.innerHTML = "사용 가능한 아이디입니다.";
  } else {
    emailValidator.classList.remove("valid");
    emailValidator.innerHTML = "이메일 형식이 올바르지 않습니다.";
  }
}

function validateEnglish(e) {
  const englishReg = new RegExp("[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*");
  const checkImg = englishValidator.querySelector("img");
  if (englishReg.test(passwordInput.value)) {
    englishValidator.classList.add("valid");
    checkImg.src = blueCheckSrc;
  } else {
    englishValidator.classList.remove("valid");
    checkImg.src = grayCheckSrc;
  }
}

function validateNumber(e) {
  const numberReg = new RegExp("[a-zA-Z0-9]*[0-9]+[a-zA-Z0-9]*");
  const checkImg = numberValidator.querySelector("img");
  if (numberReg.test(passwordInput.value)) {
    numberValidator.classList.add("valid");
    checkImg.src = blueCheckSrc;
  } else {
    numberValidator.classList.remove("valid");
    checkImg.src = grayCheckSrc;
  }
}

function validateCount(e) {
  const checkImg = countValidator.querySelector("img");
  if (passwordInput.value.length > 7 && passwordInput.value.length < 21) {
    countValidator.classList.add("valid");
    checkImg.src = blueCheckSrc;
  } else {
    countValidator.classList.remove("valid");
    checkImg.src = grayCheckSrc;
  }
}

function validateSame(e) {
  const checkImg = sameValidator.querySelector("img");
  console.log(password2Input.value, passwordInput.value);
  if (password2Input.value == passwordInput.value) {
    sameValidator.classList.add("valid");
    checkImg.src = blueCheckSrc;
  } else {
    sameValidator.classList.remove("valid");
    checkImg.src = grayCheckSrc;
  }
}

function initValidate() {
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validateEnglish);
  passwordInput.addEventListener("input", validateNumber);
  passwordInput.addEventListener("input", validateCount);
  password2Input.addEventListener("input", validateSame);
}
