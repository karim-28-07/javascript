// Sum
// Créez un tableau vide numbers
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau
// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau

var numbers = [];
var numRandom = 0;

for (var i = 1; i<= 50; i++){
    
    numRandom = Math.floor(Math.random()* (100 - 0 + 1) + 1);
    numbers.push(numRandom);

    console.log(numRandom);
}

console.log(numbers); 

var total = 0;

// console.log("i", i);

for (var i = 0; i <= numbers.length-1; i++){
    total = total + numbers[i]
}

console.log("total", total);