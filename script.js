// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialCharacters = ["!", "@", "#", '$', '%', '^', '&', '*', '(', ')', '+', '-'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let chosenOnes = []

// Write password to the #password input

function generatePassword () {
  let passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
  
  while (passwordLength <= 8 || passwordLength >= 128)
  {
    window.alert("Password must contain at least 8 characters and less than 128 characters");
    passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
  }
  
function generatePassword () {
  let passwordPrompt = prompt ("Choose how many characters you would like to include in your password");
  alert (passwordPrompt);
  if (passwordPrompt < 8)
     {
      window.alert("Password must at least 8 characters");
      alert (passwordPrompt);
    } else if (passwordPrompt > 128) {

      window.alert("Password must be no more than 128 characters");
      alert (passwordPrompt);

    } else if (passwordPrompt > 8, passwordPrompt < 128) {
      window.alert ("Click OK to include special characters in your password");
    } 
  
  }
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword ()


//function generatePassword (){
  //var characters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var passwordLength = 12;
  //var password = "";

 // for (var i = 0; i <= passwordLength; i++){
   // var randomPassword= Math.floor(Math.random() * characters.length);
   // password += characters.substring (randomPassword, randomPassword +1);
  
 // document.getElementById ("password").value=password;
  //
