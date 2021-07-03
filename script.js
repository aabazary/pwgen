// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
var numlength;
var conNum;
var conChar;
var conCap;
var conLow;

// Array of all the values for each selection 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alpha2 = ["A", "B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



generateBtn.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});


function generatePassword() {
    //prompt starting selections
    numlength = parseInt(prompt("Type value between 8 and 128"));
   //value for typed number between 8-128, with limiters
    if (!numlength) {
        alert("Type a Value!");
    } else if (numlength < 8 || numlength > 128) {

        numlength = parseInt(prompt("Value must be between 8 and 128"));

    } else {
        // list of all the booleans that will be created from confirm prompts
        conNum = confirm("Contain Numbers?");
        conChar = confirm("Contain Special Characters?");
        conCap = confirm("Contain Capital Letters?");
        conLow = confirm("Contain Lowercase Letters?");
    };

    // giving alert in case no choices are selected
    if (!conChar && !conNum && !conCap && !conLow) {
        choices = alert("You must confirm at least 1 prompt!");

    }
    // 4 confirms:
    else if (conChar && conNum && conCap && conLow) {

        choices = character.concat(number, alpha, alpha2);
    }
    // 3 confirms:
    else if (conChar && conNum && conCap) {
        choices = character.concat(number, alpha2);
    }
    else if (conChar && conNum && conLow) {
        choices = character.concat(number, alpha);
    }
    else if (conChar && conLow && conCap) {
        choices = character.concat(alpha, alpha2);
    }
    else if (conNum && conLow && conCap) {
        choices = number.concat(alpha, alpha2);
    }
    // 2 confirms:
    else if (conChar && conNum) {
        choices = character.concat(number);

    } else if (conChar && conLow) {
        choices = character.concat(alpha);

    } else if (conChar && conCap) {
        choices = character.concat(alpha2);
    }
    else if (conLow && conNum) {
        choices = alpha.concat(number);

    } else if (conLow && conCap) {
        choices = alpha.concat(alpha2);

    } else if (conNum && conCap) {
        choices = number.concat(alpha2);
    }
    // 1 confirms:
    else if (conChar) {
        choices = character;
    }
    else if (conNum) {
        choices = number;
    }
    else if (conLow) {
        choices = alpha;
    };

    // password placeholder
    var password = [];

    //math function
    for (var i = 0; i < numlength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
   //join selections
    var pw = password.join("");
    UserInput(pw);
    return pw;
}


function UserInput(pw) {
    document.getElementById("password").textContent = pw;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

//copy button
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}