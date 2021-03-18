// Unique
// Créez un tableau vide numbers
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau
// à l'aide d'une boucle while affichez le premier élément de votre tableau superieur ou égal à 75 et inferieur ou égal à 100



var numbers = [];
var numRandom = 0;

for (var i = 1; i <= 50; i++) {

    numRandom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers.push(numRandom)

}

console.table(numbers)

// var myElemRemoved = numbers.shift()
// console.log("numbers shift", myElemRemoved);

// console.table(numbers)

var j = 0

while (numbers[j] < 75 || numbers[j] > 100) {
    j++;
}

console.log("final result", numbers[j]);
