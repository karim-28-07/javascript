// Try again 

var dice = null;
var count = 0;
var max = 6;

while(dice !== 6){
    console.log(Math.random(dice))* (max - count + 1) + count;
    count+=1;
}
console.log(dice);