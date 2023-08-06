//Variable Arrays

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//creates a function that returns what shows up in the text field of the password text box.
function generatePassword () {
}

//array of all the characters combined
var allCharacters = [];


//array that will return the password
var password = []; 

//this will appear as a prompt when the generate password button is pressed

var charCount = prompt("Choose a password with length of 8-128 characters.");

if (isNaN(charCount)) {

return "The value you have entered is invalid";

}







