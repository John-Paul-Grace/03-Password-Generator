// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Sets default length to 0
  var length = 0;

  // This while loop will keep asking the user for the length until it falls within our parameters
  while ((length >= 8 && length <= 128) === false) {
    length = prompt("How long do you want the password to be (between 8 and 128 characters)?");
  }
  
  // These confirms get boolean values for whether the user wants certain types of characters
  var haveLower = confirm("Do you want to use lower case letters?");
  var haveUpper = confirm("Do you want to use upper case letters?");
  var haveNumber = confirm("Do you want to use numbers?");
  var haveSpecial = confirm("Do you want to use special characters?");

  // If any of the character types were confirmed above, then we pass the boolean values collected
  // above into the generatePassword() function
  if (haveLower || haveUpper || haveNumber || haveSpecial) {
    var password = generatePassword(length, haveLower, haveUpper, haveNumber, haveSpecial);
  }

  // This sets the passwordText to the password that we generated above
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generatePassword() will take the booleans collected in writePassword() to acumulate the allowed characters,
// then it will generate a random password with those characters
function generatePassword(length, haveLower, haveUpper, haveNumber, haveSpecial) {

  // First, an empty array is created
  var characters = [];

  // If any of the boolean values are true, an array is created with all the relevant characters which is then
  // added to my characters array
  if (haveLower) {
    var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    characters = characters.concat(lowers);
  }

  if (haveUpper) {
    var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    characters = characters.concat(uppers);
  }

  if (haveNumber) {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    characters = characters.concat(numbers);
  }

  if (haveSpecial) {
    var specials = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

    characters = characters.concat(specials);
  }

  // A variable for password is instanced outside of the for loop
  var password = "";

  // A for loop runs a number of times equivalent to length.
  // For each loop, a character from the characters array will be randomly selected and added to password.
  for (var i = 0; i < length; i++) {
    var char = characters[Math.floor(Math.random() * characters.length)];

    password = password + char;
  }

  // The now complete password is returned
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);