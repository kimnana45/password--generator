var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var nums = ['1','2','3','4','5','6','7','8','9','0'];
var specials = ['!','?','@','#','$','%','^','&','*']; 

//when the button #generate is click, a password will appear inside the box 
var generateBtn = document.querySelector("#generate");
//ask user for the length 


function generatePassword(){
  
  var passwordLength = prompt("How long do you want your password to be? The length need to be between 8 and 128 characters."); 
  if (passwordLength < 8 || passwordLength > 128){
    alert("Invalid Response");
    return; 
  }

  var uppercase = confirm("Do you want uppercase letters in your passwords?");
  var lowercase = confirm("Do you want lowercase letters in your passwords?");
  var numbers = confirm("Do you want numbers in your passwords?");
  var specialChar = confirm("Do you want special characters in your passwords?");
  var password = "";
  var possibleChar = []; 
  if (uppercase){
    possibleChar.concat(uppers);
  }
  if (lowercase){
    possibleChar.concat(lowers);
  }
  if (numbers){
    possibleChar.concat(nums);
  }
  if (specialChar){
    possibleChar.concat(specials);
  }
  if(!uppercase && !lowercase && !numbers && !specialChar) {
    alert("You must choose at least one option");
    return;
  }
  console.log(possibleChar);
  for (i=0; i< passwordLength; i++){
    password += possibleChar[Math.floor(Math.random * possibleChar.length)]
  }
  return password; 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)