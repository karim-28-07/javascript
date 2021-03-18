// Bonus 1


function generatePassword(num) {

    var password2 = "";


    if (num < 6 || num > 15) {
        console.log("error");

    } else {

        for (var i = 1; i <= num; i++) {


            var password = Math.floor(Math.random() * (90 - 65 + 1) + 65);
            var password1 = String.fromCharCode(password);
            var password2 = password2 + password1;
        }
        console.log(password2);
    }



}

generatePassword(3);