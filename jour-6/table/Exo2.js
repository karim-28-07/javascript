// Table
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


// multiply(process.argv[2])

var {multiply, addition} = require ("../table-utils");

multiply(process.argv[2]);
addition(process.argv[2]);