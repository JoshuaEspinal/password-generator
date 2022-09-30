// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var isValidUserInput
  var password = ""
  var passwordNumbers = ("1234567890");
  var passwordLowercase = ("abcdefghijklmnopqrstuvwxyz");
  var passwordUppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var passwordSpecial = ("!@#$%^&*()");
  var passwordLength = ""
  while (isValidUserInput != true) {
    passwordLength = prompt ("How many characters would you like in your password? Input at least 8 and no more than 128.");
      if (passwordLength >= 8 && passwordLength <= 128) {
        isValidUserInput = true
      }
    }
  // Data
  // we need different sets of characters - maybe strings or arrays
    // numbers
    // lowercase characters
    // uppercase characters
    // special characters
// number of characters
// whether they chose numbers...


// how many characters do you want to use? some number
// do you want to use numbers? yes or no
// do you want to use lowercase characters? yes or no
// do you want to use uppercase characters? yes or no
// do you want to use special characters? yes or no

// put the selected characters together

// randomly select characters from all of the selected characters

// put them together

return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
