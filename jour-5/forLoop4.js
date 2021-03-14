var box1 = 12;
var box2 = 5;

for (var i = 12; i < 14; i++){

    box1 = box2;
    // console.log(box1 + box2);
    box2 = box1 + i ;

}

console.log(box1);
console.log(box2);
console.log(i);