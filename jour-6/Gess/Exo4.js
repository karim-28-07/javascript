var prompt = require("prompt");

var numRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);

// console.log(numRandom);



function play() {

  prompt.get(
    {
      name: "numUser",
      description: "Quel est le nombre mystère ?",
      validator: /^[1-9][0-9]$|^100$/g,
    },


    function (err, res) {

      if (res.numUser < numRandom) {
        console.log("C'est plus !");
        play();

      } else if (res.numUser > numRandom) {

        console.log("C'est moins !");
        play()

      } else {
        console.log("Bravo !!!!")
      }
    }

  );


}

play();

