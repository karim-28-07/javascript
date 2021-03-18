var roundedNumber = 3.6;
var roundedNumber = 3.3;
var roundedNumber = 3.8;
var roundedNumber = 12.4;

var strNum = roundedNumber.toString();

// console.log("strNum", strNum);
// console.log("typeof strNum", typeof strNum);

console.log("strNum.search", strNum.search("\\."));

var position = strNum.search("\\.");

console.log("strNum substring", strNum.substring(position));

var strDecimal = "0" + strNum.substring(position);