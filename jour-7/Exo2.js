var myArray = [1, 2, 3, 4, 5];

var secondArray = myArray.map (function(elem){
    return elem * 2;
});

console.log(secondArray);