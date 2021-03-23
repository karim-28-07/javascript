var fs = require("fs");

fs.readFile("jour07.txt", function (err, data){
    if (err){
        
        console.log(err);
        return 
    }

    console.log("jour07 texte :" + data.toString());

    });

