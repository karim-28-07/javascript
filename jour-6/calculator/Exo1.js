// calculator

function calculate(num1, num2, operateur) {

    if (operateur === "+") {
        console.log(num1 + num2);

    } else if (operateur === "*") {
        console.log(num1 * num2);

    } else if (operateur === "%") {
        console.log(num1 % num2);

    } else if (operateur === "-") {
        console.log(num1 - num2);

    } else {
        console.log("error");
    }



}
var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
var c = process.argv[4];


calculate(a, b, c);