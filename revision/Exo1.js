// Alphabet 

// var result = ""
function sortLetters(str) {
    var sentence = []
    for (var i = 0; i<=str.length-1; i++){

        sentence.push(str[i])

    }

    var b = sentence.sort()
    return b.join("")
}

console.log(sortLetters("konexio"))


// sortLetters(sentence.sortLetters())

// var sentence = sentence.split ("")



// sortLetters("konexio")