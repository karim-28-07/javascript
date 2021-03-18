// Nested Loop
// Créez un tableau words avec les mots suivants
// A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau contenant les lettres de chaque mot.
// A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez le nombre de "o" de chaque mot.
// Retournez le nombre total de "o"
// Résultat attendu: 8

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var temparray = [];
var countO = 0;

for (var i = 0; i <= words.length - 1; i++) {
    // console.log(words[i].split(""));

    temparray = words[i].split(" ").join("").split(""); //pour effacer les espaces

    // console.log(temparray);

    for (var j = 0; j <= temparray.length - 1; j++) {

        // console.log(temparray[j]);

        if (temparray[j] == "o") {
            countO++

        }
    }
}

console.log("final result", countO);