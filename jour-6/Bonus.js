// Créez une fonction formatDate qui reçoit en paramètre une string (au format aaaa-mm-jj)
// La fonction doit renvoyer la date au format jj/mm/aaaa
// Appelez la fonction et affichez son résultat dans la console

/*var moment = require ("moment")

function formatDate(dateTime){
    
    var dateToFormat = "2021-03-19"; 

    moment(dateToFormat).format("DD/MM/YYYY"); 

    console.log(moment(dateToFormat).format("DD/MM/YYYY"));
    

}

formatDate()*/

var moment = require("moment")

function calculateAge(age) {

    var date = new Date('28-Jul-1984')

    var age = moment().diff(date, 'years')

    console.log(age);


}

calculateAge('28-Jul-1984');