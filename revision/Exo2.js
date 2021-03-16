// XOXO

function countEach(phrase) {
    // console.log(phrase);
    var countO = 0;
    var countX = 0;
    var x = "x"; 
    var o = "o";
    for (i = 0; i <= phrase.length; i++) {
        var tempStr = phrase[i];
        if (tempStr === o) {
            countO++;
        } else if (tempStr === x) {
            countX++;
        }
    }
    if (countX === countO) { 
        console.log(true) ;
    } else {
        console.log(false);
    }
}

countEach("xooxxoox")