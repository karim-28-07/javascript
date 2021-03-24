// Countries 

var request = require("request");

var countriesNames = [];

function getCountries() {

    request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {


        var result = JSON.parse(body);

        countriesNames = result.map(function (elem) {

            return elem.name
            
            
        });
        
        console.log(countriesNames.join(" - "))

    });

}

getCountries() 






