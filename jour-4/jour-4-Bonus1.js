// Bonus 1


function generatePassword(num) {
    
   for (var i =1; i <= num; i++){

        
       var password = Math.floor(Math.random() * (90 - 65 + 1) + 65);
       var password1 = String.fromCharCode(password);
       var password2 =+ password;
    }

}


if (num < 6 || num > 15) {
    console.log("error");

} else {
    console.log(password2);
}

generatePassword(7);