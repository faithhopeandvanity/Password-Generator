// Array of special characters to be included in password
const specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
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

const password = "";

const allChars = specialCharacters.concat(
    lowerCasedCharacters,
    upperCasedCharacters,
    numericCharacters
);

// Function to prompt user for password options
function getPasswordOptions() {
    let selectUpperCase = false;
    let selectLowerCase = false;
    let selectNumeric = false;
    let selectSpecialChars = false;
    let length = parseInt(
        prompt("How many characters does your new password have?")
    );
    if (length < 8 || length > 128) {
        alert("Please select a number between 8 and 128.");
        return;
    }
}

//alt method (im confident this works)

const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))

const generatePassword = ()=> {
    let password = "";
    password += getRandomCharFromString(allChars.upperCasedCharacters);
    password += getRandomCharFromString(allChars.lowerCasedCharacters);
    password += getRandomCharFromString(allChars.specialCharacters);
    password += getRandomCharFromString(allChars.numericCharacters);
    for (let i = password.length; i < length; i++)
        pwd += getRandomCharFromString(Object.values(allChars).join(''));
    return password
}

// let fitsCriteria = prompt(
//     "Use a mix of upper and lower case characters, numbers and permitted special characters - at least one of each."
// );
// if (
//     fitsCriteria ===
//     (upperCasedCharacters[i],
//     lowerCasedCharacters[i],
//     numericCharacters[i],
//     specialCharacters[i])
// ) {
//     return;
// }

// function randomPassword() {
//     console.log
//         Math.random().toString.allChars(min =[0], max = [22]).slice(2) +
//         Math.random().toString.allChars(min =[23], max=[33])+
//         Math.random().toString.allChars(min =[34], max=[59])+
//         Math.random().toString.allChars(min =[60], max=[85]);
// }

// randomPassword();

// if initialPassword.includes(specialCharacters[i]){
//   return true
// }

// At least 8 characters, no more than 128 characters
//confirm for special chars
//return object with variables

// return {
//     selectLowerCase,
//     selectLowerCase,
//     selectNumeric,
//     selectSpecialChars,
//     length,
// };

// Conditional to check that the number that was entered is in range

// Prompts store data as strings, so need to parse into a number
// If the user's input is out of range, either return out of the function or call the function again

// Confirm which character sets to use
// If the user answers false for all, either return out of the function or call the function again

// Once they select a character set:
// Generate a random character for each selected character set
// Either push selected character sets to a mega-array of all selected characters
// OR you can keep the arrays separate and generate a random number to select the array and another to select the index

// Once character sets are selected, move on to generating random characters

// // Function for getting a random element from an array
// function getRandomLower(arr) {
// return arr.lowerCasedCharacters(Math.floor(Math.random()))
// }
// function getRandomUpper(arr) {
//     return arr.upperCasedCharacters(Math.floor(Math.random()))
// }
// function getRandomNumber(arr) {
//     return arr.numericCharacters(Math.floor(Math.random()))
// }
// function getRandomSpecial(arr) {
//     return arr.specialCharacters(Math.floor(Math.random()))
// }

//gen random number from array length
//select char from array with that
//return selected char

// Need a variable to hold the password as it's being generated
// Need a variable to hold the index that's being generated

// For loop that loops the number of times that matches the length the user chose
// Generate a random number
// That number is the index for a character in the mega-array
// So then, mega-array[generated-index] is the actual character
// Add that character to the password

// Once we finish the for loop, return the generated password

// Function to generate password with user input
function generatePassword() {
    let userOptions = getPasswordOptions();
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
