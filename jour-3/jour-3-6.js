// Reverse

var sentence = "Hello Konexio !";
var tab = [];

for ( var i = sentence.length-1; i >= 0; i--){
    tab.push(sentence[i])
}

console.log(tab.join());
