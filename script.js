// Assignment Code
var generateBtn = document.getElementById("#generate");

// Write password to the #password input
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


function writePassword() {
  var password = ;
  var passwordText = document.getElementById("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


generatePassword()
writePassword()


//function generatePassword (){
  //var characters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var passwordLength = 12;
  //var password = "";

 // for (var i = 0; i <= passwordLength; i++){
   // var randomPassword= Math.floor(Math.random() * characters.length);
   // password += characters.substring (randomPassword, randomPassword +1);
  
 // document.getElementById ("password").value=password;
  //
}