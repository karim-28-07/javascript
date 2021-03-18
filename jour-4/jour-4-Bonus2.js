// Bonus II

function launchDice (numberOfDice){
    var total = 0
    for (var i = 1; i <= numberOfDice; i++){
        result = Math.floor(Math.random()*6)+1
        console.log("valeur ajoutée = " + result);
        total = total + result

    }
    return total;
}
launchDice(5)