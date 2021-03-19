
var prompt = require("prompt");
var colors = require("colors");

var min = 1
var max = 6

var wordMystery = "M....";

var wordMystery = Math.floor(Math.random() * (max - min + 1) + 1)
console.log(wordMystery);

if (wordMystery !== 5){

    console.log("Vous avez perdue");

}




