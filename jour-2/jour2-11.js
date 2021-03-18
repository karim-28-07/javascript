// Bonus III

var roundedNumber = 3.6;

console.log(Math.floor(roundedNumber));
console.log(Math.ceil(roundedNumber));

var decimal = roundedNumber - Math.floor(roundedNumber);

console.log(decimal);

if (decimal >= 0.5) {
    console.log(Math.ceil(roundedNumber));
}else {
    console.log(Math.floor(roundedNumber));
}






