// Comptons

// Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
// Résultat attendu: 128

var total = 0;

for (var i = 100; i <= 1000; i++) {

    if (i % 7 === 0) {

        total++;

    }

}
console.log(total);
