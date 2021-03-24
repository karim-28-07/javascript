// Countries 

var request = require("request");

var countriesNames = [];

function getCountries() {

    request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {


        countriesNames = JSON.parse(body);

        countriesNames.map(function (elem) {

            console.log(elem.name)
            // console.log(countriesNames.push(elem.name));
           

        });


    });

}

getCountries() 






