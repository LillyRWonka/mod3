// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = [ "A", "B", "C"];
var lowercase = [ "a", "b", "c"];
// Write password to the #password input
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
    // ask my questions about what characters to include
    // uppercase?
    if(confirm("Include uppercase characters?")) {
      characterSet = characterSet.concat(uppercase);
    }
    // lowercase?

    // numbers?
    // special characters?

    // add any selections to the characterSet array
    if(characterSet.length === 0) {
      alert("You must select at least one set of characters for your password");
    }
  }

  /* for(var i = 0; i < passwordLength; i++) {
    choose a character at random from the characterSet array, and then add it to the password string
    (use a combination of Math.floor() with Math.random())
  } */
  // use a for loop to generate a password of the desired password length assigning characters from the characterSet
  // at random to the password string
  // then return the password string

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
