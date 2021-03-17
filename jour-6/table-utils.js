

var myNumber = 10;
var b;
function multiply(number) {

    if (number == "") {
        console.log("error")

    }else if (isNaN(number)){
        console.log ("error");
    }else {

        for (var i = 1; i <= myNumber; i++) {
            b = number * i;
            console.log("" + number + "*" + i + "=" + b);
        }

    }

}




var myNumber = 10;
var b;
function addition(number) {

    if (number == "") {
        console.log("error")

    }else if (isNaN(number)){
        console.log ("error");
    }else {

        for (var i = 1; i <= myNumber; i++) {
            b = number * i;
            console.log("" + number + "+" + i + "=" + b);
        }

    }

}


module.exports = {
    multiply, addition
}

