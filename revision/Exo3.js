// Palindrome

function checkPal(palindrome) {
    var palindrome = "laptop"

    var check = palindrome.split("").reverse().join("");

    if (palindrome == check) {
        console.log("Palindrome !");
    } else {
        console.log("Nope");
    }
}

checkPal()