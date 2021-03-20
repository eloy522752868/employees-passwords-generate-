/**
* Name: Eloy Gonzalez
* Date: 03/17/2021
* Description:
 This week’s homework requires me to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. 
 This app will run in the browser and will feature dynamically updated HTML and CSS. I was going to use Alerts, prompts and confirm boxes. 
 But after the past week what we have learned on working with API's. I worked in what we have practice. I love this Bootcamp!!
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
var generatePass = document.querySelector(".wrapper button");

passKeys = 
{
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "*;<>()[]{}#$?!^|",
};

/** Call action, on this case i am using the listener for click event of button. When click getting the values for the global variables
 * and running action to pull input one user entered thier options.
 */
generatePass.addEventListener("click", () => {
  var length = +inputLength.value;
  var activeLower = lowerCaseLetter.checked;
  var activeUpper = upperCaseLetter.checked;
  var activeNumber = number.checked;
  var activeSymbol = symbol.checked;
  generatePassword
  (
    activeLower,
    activeUpper,
    activeNumber,
    activeSymbol,
    length
  );
});

function generatePassword(lower, upper, num, sym, length) 
{
  //Contructing the Passkeyselected
  var passwordText = document.querySelector("#password");
  selectedPassKeys = "";
  finalPassword = "";
  passOptions = 
  {
    lowercase: lower,
    uppercase: upper,
    number: num,
    symbol: sym,
  };
 //Loop threw until you reach the length selected by user.
  for (i = 0; i < Object.keys(passOptions).length; i++)
   {
    selectedPassKeys += Object.values(passOptions)[i]
      ? passKeys[Object.keys(passOptions)[i]]
      : "";
   }
  //The below two conditions handle to check that the length entered is at least 8 and no more than 128 as the one of the homework criteria requested.
 if(length > 0 && length  < 8 )
 {
    passwordText.value = "Please select a length of at least 8 characters.";
 }
 else if (length > 128 )
 {
    passwordText.value = "Please select a length no more than 128 characters.";
 }
  //Randomize the constucted  selectpasskey if selectpasskey is not 0 or length is not 0.
 else if (selectedPassKeys != "" && length > 0)
 {
    for (i = 0; i < length; i++) 
    {
      finalPassword +=
        selectedPassKeys[Math.floor(Math.random() * selectedPassKeys.length)];
    }
    passwordText.value = finalPassword;
 } 
 else
 {
    passwordText.value = "Please select any password option and specify the length.";
 }
}
