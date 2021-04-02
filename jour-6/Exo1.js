


function formatDate (dateTime) {

    var dateTime = new Date();
    var mm = (dateTime.getMonth()+1).toString().padStart(2, "0");
    
    console.log(dateTime.getDate() + "/"+ mm +"/"+ dateTime.getFullYear());


}

formatDate("2021-03-18");
