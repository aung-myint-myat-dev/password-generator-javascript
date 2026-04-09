const digits = document.querySelectorAll(".digit");
const copyStatus = document.querySelector(".copy-status");

const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "~!@#$%^&=+-_".split("");

function generateNumber() {
  const isNumber = document.getElementById("isNumber").checked;
  const isUppercase = document.getElementById("isUppercase").checked;
  const isLowercase = document.getElementById("isLowercase").checked;
  const isSpecial = document.getElementById("isSpecial").checked;
  
  let chars = [];
  
  if(isNumber) chars = [...chars, ...numbers];
  if(isUppercase) chars = [...chars, ...uppercase];
  if(isLowercase) chars = [...chars, ...lowercase];
  if(isSpecial) chars = [...chars, ...specialChars];

  if(chars.length === 0) chars = [...numbers, ...uppercase, ...lowercase, ...specialChars];
  
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

function onGenerateNumber() {
  for (let digit of digits) {
    digit.value = generateNumber();
  }
}

function onCopyToClipboard() {
  let text = "";

  for (let digit of digits) {
    if (Number(digit.value) === 0) {
      copyStatus.classList.add("show");
      copyStatus.innerHTML = "No values";
      setTimeout(() => {
        copyStatus.classList.remove("show");
        copyStatus.innerHTML = '';
      }, 2000);
      return;
    }

    text += digit.value;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        copyStatus.classList.add("show");
        copyStatus.innerHTML = `Copied! ${text}`;
        setTimeout(() => {
            copyStatus.classList.remove("show");
            copyStatus.innerHTML = '';
        }, 2000);
      })
      .catch((err) => {
        console.log("Error occured ", err);
      });
  }
}
