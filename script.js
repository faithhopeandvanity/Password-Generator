let temp = "";
let passwd = "";
const alpha = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "@%+\\/'!#$^?:)(}{][~-_.";
const btn = document.getElementById("generate");

const genPass = () => {
    let len = prompt("How long do you want your password to be (8-128 chars)?");

    if (len < 8 || len > 128 || isNaN(len)) {
        alert("Please choose a length between 8 and 128.");
        return genPass();
    }

    let upper = confirm("Would you like uppercase letters in your password?");
    let lower = confirm("Would like lowercase letters in your password?");
    let num = confirm("Would you like numbers in your password?");
    let special = confirm(
        "Would you like special characters (@%+\\/'!#$^?:)(}{][~-_. are valid) in your password?"
    );

    if (lower) temp += alpha;
    if (num) temp += "0123456789";
    if (special) temp += specialCharacters;
    if (upper) temp += alpha.toLocaleUpperCase();
    //toLocaleUpperCase enables me to expedite process and simplify code by using same string twice
    console.log(temp);

    for (let i = 0; i < len; i++) {
        passwd += temp[Math.floor(Math.random() * temp.length)];
    }
    //this links script.js to html:
    document.getElementById("password").innerHTML = passwd;
};
//onclick means button only works when user clicks it
btn.onclick = genPass;
