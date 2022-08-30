// Assignment Code
var generateBtn = document.getElementById("#generate");

// Write password to the #password input
function generatePassword (){
  var characters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";

  for (var i = 0; i <= passwordLength; i++){
    var randomPassword= Math.floor(Math.random() * characters.length);
    password += characters.substring (randomPassword, randomPassword +1);
  }
  document.getElementById ("password").value=password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


