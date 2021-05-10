// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDispl = document.querySelector("#password");

const alphaLow = "abcdefghijklmnopqrstuvwxyz";
const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers"); const incSymbols = document.getElementById("symbols");
const Upcase = document.getElementById("Uppercase");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", () => {
  let characters = alphaLow;
  Upcase.checked ? (characters += alphaUp) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
