// Course 
// Créez deux variables ussainBolt et tysonGay valant 0
// Tant que l'une des deux variables n'a pas dépassé 100
// Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme
// Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier)

var ussainBolt = 0;
var tysonGay = 0;

var min = 1;
var max = 10;


while (ussainBolt < 100 || tysonGay < 100){

    var number1 = Math.floor(Math.random()* (max-min +1) + min);
    var number2 = Math.floor(Math.random()* (max-min +1) + min);

    ussainBolt+= number1;
    tysonGay+= number2;

    // console.log("ussainBolt", ussainBolt);
    // console.log("tysonGay", tysonGay);

}

if(ussainBolt < tysonGay){

    console.log("tysonGay : you are winner");

}else if (ussainBolt > tysonGay){
    console.log("ussainBolt : your are winner");
}else {
    console.log("Equality");
}