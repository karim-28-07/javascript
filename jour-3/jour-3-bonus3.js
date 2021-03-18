// Bonus III

var students = ["Mugi", "Amir", "Mehdi", "Lionel", "Ikram", "Sabrina", "Axel","Asma","Francisco"]

var min = 0;
var max = students.length -1;

var random = Math.random();

var indexRandom = Math.floor(random * (max + 1))

console.log(students[indexRandom]);
