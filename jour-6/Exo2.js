function calculateAge (dateString) {

    var today = new Date();

    // console.log(today);

    var birthDate = new Date(dateString);

    // console.log(birthDate);

    var age = today.getFullYear() - birthDate.getFullYear();

    console.log(age);
   
    
    

  
}

calculateAge("1984");
