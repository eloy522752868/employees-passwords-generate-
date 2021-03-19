    /**
* Name: Eloy Gonzalez
* Date: 03/17/2021
* Description:
 This week’s homework requires me to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. 
 This app will run in the browser and will feature dynamically updated HTML and CSS. I was going to use Alerts, prompts and confirm boxes. But after the past week gone bit more on working with API's 
 I worked in what we have practice. I love this Class!!
*/
    
    
 /**Decalared Variables
 * I used the document method querySelector() and returned my diffrent imputs for the length,lowercaseletter,uppercaseletter and button.
 * I also created a new passkey object to add keys to create the pattern to generate lowercase, uppercase, number and symbol based select option selected by user.
 */
    
  var inputLength = document.querySelector('input[id="length"]');
  var lowerCaseLetter = document.querySelector('input[id="lowercase"]');
  var upperCaseLetter = document.querySelector('input[id="uppercase"]');
  var number = document.querySelector('input[id="number"]');
  var symbol = document.querySelector('input[id="symbol"]');
  var generatePass = document.querySelector('.wrapper button');
    
  passKeys = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '*;<>()[]{}#$?!^|'
};

// Call action
generatePass.addEventListener("click", () => {
  var length = +inputLength.value;
  console.log(inputLength.value );
  var activeLower = lowerCaseLetter.checked;
  var activeUpper = upperCaseLetter.checked;
  var activeNumber = number.checked;
  var activeSymbol = symbol.checked;
  generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
  
});

function generatePassword(lower, upper, num, sym, length){
  //Contructing the Passkeyselected
   selectedPassKeys = "";
   finalPassword = "";
  
    passOptions = {
    lowercase: lower,
    uppercase: upper,
    number: num,
    symbol: sym
  };

  console.log(passOptions);
  for(i=0;i<Object.keys(passOptions).length;i++)
  {
    selectedPassKeys += (Object.values(passOptions)[i]) ? passKeys[Object.keys(passOptions)[i]] : "";
  }
  console.log(selectedPassKeys);
  if(selectedPassKeys != "" && length > 0){
    for(i=0;i<length;i++){
      finalPassword += selectedPassKeys[Math.floor(Math.random() * selectedPassKeys.length)];
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;
 
  }else{
    passwordText.value =  "Select any password option and specify the length";
  }
  
}