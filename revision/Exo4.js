// Swap

swap("Hello World");
function swap(phrase) {

    var wordLength = phrase.length;
    var temp = "";
    var result = "";

    console.log(wordLength);

    for(i=0;i<=wordLength;i++) {

        console.log(phrase.charAt(i));
        temp = phrase.charAt(i);
        if (temp === temp.toUpperCase()){
            result += temp.toLowerCase();
            console.log(temp, result);
        } else {
            result += temp.toUpperCase();
            console.log(result), temp;
        }
    }
}

