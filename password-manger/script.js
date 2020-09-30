// Assignment Code and EventListener (make something happen when user clicks button)
document.querySelector("#generate").addEventListener("click", writePassword);

// Make function that generates password
function generatePassword() {
  // Define length of the password as equal to the number entered by the user between 8 and 128 inclusive
  var length = prompt(
    "How many characters would you like in your password? (8 - 128)"
  );
  // Error message if user enters a number less than 8, more than 128, or not a number
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter number between 8 and 128");
    // Dialog box asking again
    var length = prompt(
      "How many characters would you like in your password? (8 - 128)"
    );
    // Dialog boxes asking what kinds of symbols to use
    var confirmUpper = confirm("Use uppercase?");
    var confirmLower = confirm("Use lowercase?");
    var confirmNumbers = confirm("Use numbers?");
    var confirmSymbols = confirm("Use symbols?");
  }
  // Confirm that user confirmed at least one option
  while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSymbols) {
    alert("Please select one or more character types.");
    var confirmUpper = confirm("Use uppercase?");
    var confirmLower = confirm("Use lowercase?");
    var confirmNumbers = confirm("Use numbers?");
    var confirmSymbols = confirm("Use symbols?");
  }
  // Define all possible characters in password
  var passChar = [];
  var upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "?"];

  // If statements to string symbols together (or "concatenate" them)

  if (confirmSymbols) {
    passChar = passChar.concat(upper);
  }
  if (confirmLower) {
    passChar = passChar.concat(lower);
  }
  if (confirmNumbers) {
    passChar = passChar.concat(numbers);
  }
  if (confirmSymbols) {
    passChar = passChar.concat(symbols);
  }

  // Define random password and make for loop to pull characters a number of times equal to the length

  var rPassword = "";
  for (var i = 0; i < length; i++) {
    rPassword =
      rPassword + passChar[Math.floor(Math.random() * passChar.length)];
  }
  return rPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
