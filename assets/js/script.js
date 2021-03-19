    //Decalared my Varaibles 
    var inputLength = document.querySelector('input[name="length"]');
    var lowerCaseLetter = document.querySelector('input[name="lowercase"]');
    var upperCaseLetter = document.querySelector('input[name="uppercase"]');
    var number = document.querySelector('input[name="number"]');
    var symbol = document.querySelector('input[name="symbol"]');
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
    //document.querySelector('input[type="text"]').value =  finalPassword;
  }else{
    passwordText.value =  "Select any password option and specify the length";
  }
  
}