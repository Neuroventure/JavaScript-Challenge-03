//Variable Arrays
function generatePassword() {
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var possibleCharacters = [];


 // choosing  the length of your password to be generated.
 numberOfCharacters = prompt("How long do you want your password to be? Choose a number between 8-128.");
 if (numberOfCharacters < 8 || numberOfCharacters > 128) {
   return "Please choose a valid password length.";
 } else if (isNaN(numberOfCharacters)) {
   numberOfCharacters = prompt("Please enter a value between 8-128.");
 }
 else {
   alert("Your password will be " + numberOfCharacters + " characters long.");
   
 }

 // else if statements to narrow  down type of password.

 hasLowercase = confirm("Do you want lowercase letters?");
 if (hasLowercase) {
   var turnToLowercase = alert("Your password will have lowercase letters.");
 }
 else {
   alert("Your password will NOT have lowercase letters.");
 }

 hasUppercase = confirm("Do you want uppercase characters?");
 if (hasUppercase) {
   alert("Your password will have uppercase characters.");
 }
 else {
   alert("Your password will NOT have uppercase characters.");
 }

 hasNumbers = confirm("Do you want to use numbers?");
 if (hasNumbers) {
   alert("Your password will have numbers.");
 }
 else {
   alert("Your password will NOT have numbers.");
 }

 hasSpecial = confirm("Do you want special characters in your password?");
 if (hasSpecial) {
   alert("Your password will have special characters.");
 }
 else {
   alert("Your password will NOT have special characters.");
 }
//in case the user doesn't choose any of the options for a character type
 if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
   return "Please select at least one character type.";
 };

 // this groups all the selected types of characters together based on the users choice
 if (hasLowercase) {
   possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
 }
 if (hasUppercase) {
   possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
 }
 if (hasNumbers) {
   possibleCharacters = possibleCharacters.concat(numericCharacters);
 }
 if (hasSpecial) {
   possibleCharacters = possibleCharacters.concat(specialCharacters);
 }

 // picks random charcters from the arrays and returns the new password
 let finalPassword = ""
 for (let i = 0; i < numberOfCharacters; i++) {
   let rng =[Math.floor(Math.random() * possibleCharacters.length)];
   // or finalPassword += possibleCharacters[rng];
   finalPassword = finalPassword + possibleCharacters[rng];
 }
 return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);