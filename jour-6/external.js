module.exports = "Hello World";

function sayHelloInFrench(){
    return "Bonjour";
}

function sayHelloInEnglish(){
    return "Hello";
}

// module.exports = {
    // sayHelloInFrench,
    // sayHelloInEnglish,
// }

exports.sayHelloInFrench = function() {
    return 'Bonjour';
};
exports.sayHelloInEnglish = function() {
    return 'Hello';
};