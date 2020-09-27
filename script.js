// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("How many characters?"));
var number = confirm("Do you want number characters?");
var upperCase = confirm("Do you want upper case characters?");
var lowerCase = confirm("Do you want lower case characters?");
var symbol = confirm("Do you want special characters?");
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
];

var parentArray = [""];

function generatePassword() {
  if (number) {
    parentArray = parentArray.concat(numberArray);
  }
  if (upperCase) {
    parentArray = parentArray.concat(upperArray);
  }
  if (lowerCase) {
    parentArray = parentArray.concat(lowerArray);
  }
  if (symbol) {
    parentArray = parentArray.concat(symbolArray);
  }

  for (var i = 0; i < length; i++) {
    var pw = pw + parentArray[Math.floor(Math.random() * parentArray.length)];
  }
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
