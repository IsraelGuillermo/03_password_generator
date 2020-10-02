// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("How many characters?"));
while (isNaN(length) || length < 8 || length > 128)
  length = Number(
    prompt(
      "Length must be 8-128 characters. How many characters would you like your password to be?"
    )
  );
// Web browser will prompt these questions for the user to answer
var number = confirm("Do you want number characters?");
var upperCase = confirm("Do you want upper case characters?");
var lowerCase = confirm("Do you want lower case characters?");
var symbol = confirm("Do you want special characters?");
// if User does not select at least one category then loop will start until user selects one category
while (
  number === false &&
  upperCase === false &&
  lowerCase === false &&
  symbol === false
) {
  alert("You must select at least one category!");
  var number = confirm("Do you want number characters?");
  var upperCase = confirm("Do you want upper case characters?");
  var lowerCase = confirm("Do you want lower case characters?");
  var symbol = confirm("Do you want special characters?");
}
// Array for uppercase
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

// Array for lowercase

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
// Array for numbers

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Array for special characters

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

// function will generate password
function generatePassword() {
  // parent array which will be used to fill up with info based on what the user selects
  var parentArray = [];

  // if user selects numbers then number array will be placed into parent array
  if (number) {
    parentArray = parentArray.concat(numberArray);
  }
  // if user selects uppercase then uppercase array will be placed into parent array

  if (upperCase) {
    parentArray = parentArray.concat(upperArray);
  }
  // if user selects lowercase then lowercase array will be placed into parent array

  if (lowerCase) {
    parentArray = parentArray.concat(lowerArray);
  }
  // if user selects symbol then symbol array will be placed into parent array

  if (symbol) {
    parentArray = parentArray.concat(symbolArray);
  }
  // This for loop will use length submitted by user (length of password) then it will process the loop to generate each random character until length is met.
  // initially password is empty (non-existant)
  var pw = "";
  // loop which generates random characters until length is met
  for (var i = 0; i < length; i++) {
    // this will add each additional random character to PW(to fill it up until it meets the length)
    pw += parentArray[Math.floor(Math.random() * parentArray.length)];
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
