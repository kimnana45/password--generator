var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var nums = ['1','2','3','4','5','6','7','8','9','0'];
var specials = ['!','?','@','#','$','%','^','&','*']; 

//when the button #generate is click, a password will appear inside the box 
var generateBtn = document.querySelector("#generate");
//ask user for the length 
var passwordLength = prompt("How long do you want your password to be? The length need to be between 8 and 128 characters."); 
if (passwordLength < 8 || passwordLength > 128){
  alert("Invalid Response");
}

// } else {
//     return; 
// passwordLength.textContent = length 
  


function generatePassword(){
  
  var uppercase = confirm("Do you want uppercase letters in your passwords?");
  var lowercase = confirm("Do you want lowercase letters in your passwords?");
  var numbers = confirm("Do you want numbers in your passwords?");
  var specialChar = confirm("Do you want special characters in your passwords?");
  
  
  var password = "";
  var pw = []; 

    passwordOptions = {
        hasUppercase : uppercase,
        hasLowercase : lowercase,
        hasNumbers : numbers,
        hasSpecials : specialChar,
    }
    if (passwordOptions.hasUppercase){
      pw.push(uppers.toString());
    }
    if (passwordOptions.hasLowercase){
      pw.push(lowers.toString());
    }
    if (passwordOptions.hasNumbers){
      pw.push(nums.toString());
    }
    if (passwordOptions.hasSpecials){
      pw.push(specials.toString());
    }
    else if(!uppercase && !lowercase && !numbers && !specialChar) {
      alert("You must choose at least one option")
    }
    
    for (i=0; i< passwordLength; i++){
      pw= Math.floor(Math.random * pw.length)
      password = pw
    }

        // console.log(password);
        return password; 
    }





//   if (uppercase === true || lowercase === true || numbers === true || specialChar === true) {
//     pw.push(uppers.toString());
//     pw.push(lowers.toString());
//     pw.push(nums.toString());
//     pw.push(specials.toString());
//     console.log(pw);
//   } else if 
//   (lowerscase === true || numbers === true || numbers === true){
//     pw.push(lowers);
//   } else if 
//   (numbers){
//     pw.push(nums);
//   } else if 
//   (specialChar){
//     pw.push(specials);
//     console.log(pw)
//   } else(!uppercase && !lowercase && !numbers && !specialChar)
//   {alert("You must choose at least one option.");}
// }
  // for (i=0; i<= passwordLength; i++){
  //     pw = pw + lowers.charAt(Math.floor(Math.random() * Math.floor(lowers.length)));
  //   }
  //   for (i=0; i<= passwordLength; i++){
  //     pw = pw + nums.charAt(Math.floor(Math.random() * Math.floor(nums.length)));
  //   }
  //   for (i=0; i<= passwordLength; i++){
  //     pw = pw + specials.charAt(Math.floor(Math.random() * Math.floor(specials.length)));
  //   }




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;}
  
  
  
  
  
  generateBtn.addEventListener("click", writePassword())