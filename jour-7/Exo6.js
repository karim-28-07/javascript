var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

// var myCakesFavorite = cakes.filter(function(cake){

//     cake.status = "sold out"

//     return (cake.flavor === "chocolate" )

// });

// console.log(myCakesFavorite);



var myCakesFavorite = cakes.map(function(cake){

    if (cake.flavor === "chocolate"){
        
        cake.status = "sold out";

    }
    

    return cake;

});

console.log(myCakesFavorite);

var myCakesFavoritelist = cakes.filter(function(cake){

    if (cake.status === "sold out"){
        
        return cake;

    }
});

console.log(myCakesFavoritelist);

