//VARIABLES so you know where to look 😇 
var password= "generatePassword";
const characters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength= 128;
var password = "";

//missing a lot of function to create password
for (var i = 0; i <= passwordLength; i++) {
console.log (password);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
document.getElementById("password").value = password;

// Write password to the #password input
//can not figure out how to get function to work to save my life 😭
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "password";
  var randomNumber= "password";
    var randomNumber = math.floor(Math.random() * characters.length);
     password= characters.substring(randomNumber, randomNumber +1);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


