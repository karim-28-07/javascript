var array = [1, "toto", 34, "javascript", 8]

var numbers = array.filter(function(item){

    return (typeof item === "number");

});

console.log(numbers);