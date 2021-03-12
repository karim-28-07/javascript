// Time 

function format (num) {
    // var sec = 60;
    hour = Math.floor(num/3600);
    num = num -(hour*3600);
    minute = Math.floor(num/60 ) ;
    num = num - (minute*60);
    sec = num % 60;
    
    return(hour + ":" +minute+ ":" + sec );
}

console.log(format(3700));

// 3700 => 3600 = 1H   
// 100 =>  60 = 1 min 
// 40
