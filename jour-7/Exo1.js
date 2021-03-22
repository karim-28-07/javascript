var fs = require("fs");

fs.stat("jour07.txt", function (err, stats){
    if (err){
        return console.log(err);
    }

    console.log(stats);

    });

