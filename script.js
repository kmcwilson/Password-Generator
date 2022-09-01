const generateBtn = document.querySelector("#generate");
// Here are the characters necessary to use in order to generate the password
let specialCharacters = ["!", "@", "#", '$', '%', '^', '&', '*', '(', ')', '+', '-'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [ '1','2', '3', '4', '5', '6', '7', '8', '9', '0'];
let chosenOnes = []

// This function is the generate password function that goes through all of the necessary steps to create the password 
function generatePassword () {
  let  passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
 
  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
  {
    window.alert("Password must contain at least 8 characters and less than 128 characters");
    passwordLength = parseInt(prompt ("Choose how many characters you would like to include in your password"));
    //The while is used to bring the user back to the original question is their response is NaN, <8 or >128.  
 }
  
  let specialCharactersChoice = window.confirm ('Click OK to include special characters in your password');
  let uppercaseChoice = window.confirm ('Click OK to include Uppercase letters');
  let lowerCaseChoice= window.confirm ('Click OK to include lowercase letters');
  let numbersChoice=window.confirm ('Click OK to include numbers in your password');
  // Here are the choices for users in order to make their password unique to their personal choices.

  if (specialCharactersChoice) {
      chosenOnes.push(specialCharacters.join('')) }

 if (uppercaseChoice) { 
      chosenOnes.push(upperCase.join('')) }

  if (lowerCaseChoice){
     chosenOnes.push(lowerCase.join(''))

  }
  if (numbersChoice) {
    chosenOnes.push(numbers.join(''))
  }
chosenOnes=chosenOnes.join('').split('')
// Within these if statements the variable of chosenOnes begins to put together all of the characters from each selected category and following this it is placed into a string.

 let finalPassword = []

  for (var i=0; i < passwordLength; i++){
    let randomIndex= Math.floor (Math.random() * chosenOnes.length);
    finalPassword.push (chosenOnes[randomIndex]);
    }
    return finalPassword.join('');
  //This for loop randomizes all of the characters that are within chosenOnes and using the Math.floor(Math.random()) functions, the characters are randomly selected to be written.
 }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//This function calls upon the generate password function and then writes this function in the final password under the HTML id of password.

  
// The event listener button allows the writePassword function to begin to go through the password generator.
generateBtn.addEventListener("click", writePassword);


