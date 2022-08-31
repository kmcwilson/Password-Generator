const generateBtn = document.querySelector("#generate");

let specialCharacters = ["!", "@", "#", '$', '%', '^', '&', '*', '(', ')', '+', '-'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let chosenOnes = []

// Write password to the #password input
function generatePassword () {
  let  passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
  
  while (passwordLength <= 8 || passwordLength >= 128)
  {
    window.alert("Password must contain at least 8 characters and less than 128 characters");
    passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
    //return passwordPrompt;  
 }
  
  let specialCharactersChoice = window.confirm ('Click OK to include special characters in your password');
  let uppercaseChoice = window.confirm ('Click OK to include Uppercase letters');
  let lowerCaseChoice= window.confirm ('Click OK to include lowercase letters');
  let numbersChoice=window.confirm ('Click OK to include numbers in your password');

  if (specialCharactersChoice) {
      chosenOnes.concat(specialCharacters) }

 if (uppercaseChoice) { 
      chosenOnes.concat(upperCase) }

  if (lowerCaseChoice){
     chosenOnes.concat(lowerCase)

  }
  if (numbersChoice) {
    chosenOnes.concat(numbers)
  }
}
  
    
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


