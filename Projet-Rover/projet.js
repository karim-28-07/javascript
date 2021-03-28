
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
console.log(grid.join("\n")  +"\n\n")
// console.table(grid);


var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(elem) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "W":
      rover.direction = "S"
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "E":
      rover.direction = "N";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "S":
      rover.direction = "E";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    default:
      console.log("this is not a valid .");
  }
}

function turnRight(elem) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "E":
      rover.direction = "S";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "S":
      rover.direction = "W";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "W":
      rover.direction = "N";
      console.log("Mars Rover is now facing " + rover.direction);
      break;
  }
}


turnRight();
turnRight();
turnRight();
turnRight();




function moveForward() {
  var xIncrease = 0;
  var yIncrease = 0;
  rover.travelLog.push({ x: rover.x, y: rover.y })



  if (rover.direction = "N") {
    yIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    console.log("", rover.travelLog);
  }
  else if (rover.direction = "E") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "S") {
    yIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "W") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }

  rover.x = rover.x + xIncrease;
  rover.y = rover.y + yIncrease;
}


function moveBackward() {
  var xIncrease = 0;
  var yIncrease = 0;
  rover.travelLog.push({ x: rover.x, y: rover.y })



  if (rover.direction = "N") {
    yIncrease = -1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    console.log("", rover.travelLog);
  }
  else if (rover.direction = "E") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "S") {
    yIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "W") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }

  rover.x = rover.x + xIncrease;
  rover.y = rover.y + yIncrease;
}


// moveForward();
// moveForward();
// moveForward();
// moveForward();


// moveBackward();
// moveBackward();
// moveBackward();
// moveBackward();



function pilotRover(move) {


  // var max = 10

  for (var i = 0; i < move.length; i++) {


    console.log(move[i])

    switch (move[i]) {
      case "l":
        turnLeft();
        break;

      case "r":
        turnRight();
        break;

      case "f":
        moveForward();
        break;

      case "y":
        moveBackward();
        break;

      default:
        console.log("this is not a valid .");
    }
  }
}
pilotRover("")




var prompt = require("prompt");


prompt.start();

function displayPrompt() {

  prompt.get({
    name: "pilotRover",
    description: "Move Mars Rover with the letters(l, r , f, y)",
    validator: /[rfly]/m,
  },
  
  
  function (err, res) {
    
    // var min = 0;
    // var max = 10;
    
  
      // for (var i = 0; i<res.length; i++) {

pilotRover(res.pilotRover.substring(0))
        // console.log('#')

        if (res.pilotRover.indexOf === "l") {
          return pilotRover("l")
         
        } else if (res.pilotRover.indexOf === "r") {
          return pilotRover("r")
        }
        else if (res.pilotRover.indexOf === "f") {
          return pilotRover("f")
        }
        else if (res.pilotRover.indexOf === "y") {
          return pilotRover("y")
        }
        else {
          // console.log(err);
          displayPrompt();
        }

      // }

    });
}

displayPrompt()

