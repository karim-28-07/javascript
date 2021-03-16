var exemple = require("./external.js");
var {sayHelloInFrench, sayHelloInEnglish} = require("./external.js")

console.log(exemple);

console.log(exemple.sayHelloInFrench());
console.log(exemple.sayHelloInEnglish());