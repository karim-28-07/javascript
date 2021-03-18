// Chanceux 

// Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5

var sum = 0;
var min = 1;
var max = 6;

for(var i = 1; i <=20; i++){

    var dice = Math.floor(Math.random()* (max - min + 1) + min);
     
    if(dice >= 5){

        sum+= dice; 
    }

}

console.log(sum);

