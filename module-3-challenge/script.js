var password= "generatePassword";
const characters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength= 128;
var password = "";


for (var i = 0; i <= passwordLength; i++) {
console.log (password);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
document.getElementById("password").value = password;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  var randomNumber= "password";
    var randomNumber = math.floor(Math.random() * characters.length);
     password= characters.substring(randomNumber, randomNumber +1);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


