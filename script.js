// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = [ "A", "B", "C"];
var lowercase = [ "a", "b", "c"];
var numbers = [ "1", "2", "3"];
var special = ["!", "&", "#"]

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterSet = [];
  var password = "";
  var passwordLength = getPasswordLength();
  
  while(characterSet.length === 0) {
    // asks my questions about what characters to include
    // uppercase?
    if(confirm("Include uppercase characters?")) {
      characterSet = characterSet.concat(uppercase);
    }
    // lowercase?
    if(confirm("Include lowercase characters?")) {
      characterSet = characterSet.concat(lowercase);
    }
    // numbers?
    if(confirm("Include numbers characters?")) {
      characterSet = characterSet.concat(numbers);
    }
    // special characters?
    if(confirm("Include special characters?")) {
      characterSet = characterSet.concat(special);
    }
    //message if all answers are no
    if(characterSet.length === 0) {
      alert("You must select at least one set of characters for your password");
    }
  }

  // generates a password of the desired password length assigning characters from the characterSet
  // at random to the password string
  // then returns the password string
var index = 0;
var password = "";

for(var i = 0; i < passwordLength; i++) {
 index = Math.floor(Math.random() * characterSet.length);
 password = password + characterSet[index]
}

  return password;
}

function getPasswordLength() {
  var length = prompt("How many characters would you like your password to be? (8-128)");

  if(length < 8 || length > 128 || isNaN(length)) {
    alert("Password must be a number between 8 and 128");
    getPasswordLength();
  }else {
    return length;
  }
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
