
// The following options have to do directly with the button generation with making the random password and the event listener for the click
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// This sets the variable in for the "current choice" as well as the "pass choice"  The let is going to apply just to this block of code. 
var currentChoice = "";
let passChoice = "";
//Below is a list of characters that the user can choose from. As well as confirmation and decline of choices.
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*()<>?:-_=+[]';
// This is a general length function. If they determine a length less than 8 characters or more than 128 then they will get the alert. If not it will move down the if else tree. 
function createPassword() {
    passLength = prompt("Select how many characters you would like in your password. 1-128");
  if (passLength < 8 || passLength > 128) {
    alert ("Please check character length selection and resubmit");
    return 
  }
  // If user selected acceptable length criteria this will then allow them to decide if they would like to use upper case characters. 
  else { 
    var upperCaseChoice = confirm("Would you like to have uppercase letters in your password? Click OK if yes");
  if (upperCaseChoice === true) {
    passChoice += upperCase;
  }
  // This allows the user to decide if they would like lower case characters 
    var lowerCaseChoice = confirm("Would you like to have lower case letters in your password? Click OK if yes");
  if (lowerCaseChoice === true) {
    passChoice += lowerCase;
  }
  // This allows the user to decide if they would like numbers 
    var numberChoice = confirm ("Would you like to have numbers in your password? Click OK if yes");
  if (numberChoice === true) {
    passChoice += number;
  }
  // This allows the user to decide if they would like special characters 
    var symbolChoice = confirm ("Would you like to have special characters in your password? Click OK if yes");
  if (symbolChoice === true);
    passChoice += symbols;
  }
  // This addition is a for loop to present the "currentChoice" in with the users selected passChoice decisions and uses a math random and math floor command to randomize all true selections for password generator 
  for (i = 0; i < passLength; i++) {
    currentChoice += passChoice[Math.floor(Math.random() * (passChoice.length))];
    }
    return currentChoice  
  }
// This final function pushes the final submission to the index for the generator to function
function writePassword() {
  var password  = createPassword();
  var passwordDisplay = document.querySelector("#password");
  passwordDisplay.value = password;
}