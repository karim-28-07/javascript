// Alphabet 


function sortLetters(str) {
    var Letters = []
    for (var i = 0; i<=str.length-1; i++){

        Letters.push(str[i])

    }

    var b = Letters.sort()
    return b.join("")
}

console.log(sortLetters("konexio"))


