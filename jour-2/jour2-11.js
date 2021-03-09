// Bonus III

var roundedNumber = 3.6;

partiedecimale = roundedNumber - Math.floor(roundedNumber)

if (partiedecimale > 0.5){
    console.log(Math.ceil(roundedNumber));
}else {
    console.log(Math.floor(roundedNumber));
}