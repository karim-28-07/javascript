

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  ];
  
  var rover = {
    direction: "N",
    x: 0,
    y: 0
   
  };
  
  function turnLeft(obj){
    switch(obj.direction) {
      case "N":
      obj.direction = "W";
      console.log("Mars Rover is now West " + obj.direction);
      break;
  
      case "W":
      obj.direction = "S"
      console.log("Mars Rover is now South " + obj.direction);
      break;
  
      case "E":
      obj.direction = "N";
      console.log("Mars Rover is now Nord " + obj.direction);
      break;
      
      case "S":
      obj.direction = "E";
      console.log("Mars Rover is now East " + obj.direction);
      break;
        
      default:
      console.log("this is not a valid .");
    }
  }
  
  function turnRight(obj){
    switch(obj.direction) {
      case "N":
        obj.direction = "E";
        console.log("Mars Rover is now East " + obj.direction);
        break;
  
      case "E":
        obj.direction = "S";
        console.log("Mars Rover is now South " + obj.direction);
        break;
      
      case "S":
        obj.direction = "W";
        console.log("Mars Rover is now West " + obj.direction);
        break;
        
      case "W":
       obj.direction = "N";
        console.log("Mars Rover is now North " + obj.direction);
        break;
    }
  }
  
  
  turnLeft(rover);
  turnLeft(rover);
  turnLeft(rover);
  turnLeft(rover);

 function moveFroward(obj){
   
   obj.x = 1
   obj.y = 1

   obj.direction = "E"
  
  console.log(obj)
  
}

moveFroward(rover)


var left = "l";
var right = "r";
var forward = "f";



function pilotRover(str){

  
    for( var i = 1; i >= str.length - 1; i++){
      
      console.log(i)
      if( i = left){
        console.log("l", turnLeft(rover))
      }
      else if( i = right){
        console.log("r", turnRight(rover))
      }
      else if( i = forward){
        console.log("f", moveForward(rover))
      }
      else{
        console.log("error")}
    }
  
  }
  pilotRover("r")
