// Assignment Code
const password = document.querySelector("#password")
var passwordCharacters = ""
var generateBtn = document.querySelector("#generate");
const capChar = LowToHigh(65, 90)
const lowChar = LowToHigh(97, 122)
const numChar = LowToHigh(48, 57)
const symChar = LowToHigh(33, 47).concat(
  LowToHigh(58, 64)
).concat(
  LowToHigh(91, 96)
).concat(
  LowToHigh(123, 126)
)

generateBtn.addEventListener('click', function () {
  passwordCharacters = ""
  numChoice = parseInt(prompt("Select a value between 8 and 128"));
  if (!numChoice) {
    alert("Value must be input");
    return
  } else if (numChoice < 8 || numChoice > 128)
    alert("Value needs to be between 8 and 128");
  lowBool = confirm("Do you want lowercase letters?");
  capBool = confirm("Do you want Capital letters?");
  symBool = confirm("Do you want Symbols?");
  numBool = confirm("Do you want Numbers?");

  if (!lowBool && !capBool && !numBool && !symBool)
    alert("You must select at least one.")

  var choiceArray = [];
  charArray()

  function charArray() {
    if (lowBool === true) {
      choiceArray = choiceArray.concat(lowChar)
    }
    if (capBool === true) {
      choiceArray = choiceArray.concat(capChar)
    }
    if (numBool === true) {
      choiceArray = choiceArray.concat(numChar)
    } 
    if (symBool === true) {
      choiceArray = choiceArray.concat(symChar)
    } 
  }

  generatePassword()

  function generatePassword() {
    passwordCharacters = ""
    for (let i = 0; i < numChoice; i++) {
      var characterCode = choiceArray[Math.floor(Math.random() * choiceArray.length)]

      var randChar = String.fromCharCode(characterCode)
      passwordCharacters = passwordCharacters + randChar
      password.textContent = passwordCharacters
    }
    return choiceArray
  }
});

function LowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function copyPassword() {
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
} 



