// Max
// Créez un tableau vide numbers
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau
// à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau (sans utiliser la fonction)

var numbers = [];
var numRandom = 0;

for (var i = 1; i <= 50; i++) {

    numRandom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers.push(numRandom)

}

console.table(numbers)

var maxNumbers = 0;

for (var j = 0; j <= numbers.length - 1; j++) {

    if (maxNumbers < numbers[j]) {
        maxNumbers = numbers[j];
    }

}

console.log("final result", maxNumbers);
