var prompt = require("prompt");

prompt.start();
var numRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);

function displayPrompt() {

  prompt.get({ name: "q", description: "Quel est le nombre mystère ?" }, function play (err, res) { 
    
var numRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);
if (res.q < numRandom || res.q > numRandom) { 
      console.log("Bien reçu !");
    } else {
      displayPrompt(); 
    }
  });
}

displayPrompt(); 