
var prompt = require("prompt");

var grid = [
  ["N ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
  y: 0,
  travelLog: []
};

function turnLeft(obj) {
  switch (obj.direction) {
    case "N":
      obj.direction = "W";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "W":
      obj.direction = "S"
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "E":
      obj.direction = "N";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "S":
      obj.direction = "E";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    default:
      console.log("this is not a valid .");
  }

  grid[obj.y][obj.x] = obj.direction

}

turnLeft(rover)



function turnRight(obj) {
  switch (obj.direction) {
    case "N":
      obj.direction = "E";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "E":
      obj.direction = "S";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "S":
      obj.direction = "W";
      console.log("Mars Rover is now facing " + rover.direction);
      break;

    case "W":
      obj.direction = "N";
      console.log("Mars Rover is now facing " + rover.direction);
      break;
  }
  grid[obj.y][obj.x] = obj.direction

}


turnRight(rover);





function moveForward(obj) {

  var err = ""
  obj.travelLog.push({ x: obj.x, y: obj.y })

  switch (obj.direction) {
    case "N":
      if (obj.y == 0) {
        err = "The rover can't go northern";

      }else {
        obj.y--;

      }
      break;

    case "E":
      if(obj.y == 9) {
        err = "The rover can't go eastern";
      
        }else {

          obj.x++;
        }


      break;

    case "S":
      if (obj.y == 9) {
        err = "The rover can't go southern";
      } else {
        obj.y++;

      }

      break;

    case "W":
      if (obj.y == 0) {
        err = "The rover can't go western";
      } else {
      obj.x--;
      
      }

      break;
  }

  if (err) {
    console.error(err);
  } else {

    var lastPosition = obj.travelLog[obj.travelLog.length-1]
    console.log(lastPosition);

    grid[lastPosition.y][lastPosition.x] = " "

    grid[obj.y][obj.x] = obj.direction
    console.log(`The new position of the rover is x : ${obj.x} and y : ${obj.y} `);

  }

}



turnRight(rover)
moveForward(rover);



function pilotRover(move) {




  for (var i = 0; i < move.length; i++) {

    // console.log(move[i])

    switch (move[i]) {
      case "l":
        turnLeft(rover);
        break;

      case "r":
        turnRight(rover);
        break;

      case "f":
        moveForward(rover);
        break;

    }
  }
  console.table(grid)
}
pilotRover("rrfff")



// console.table(grid);








function useInstructions() {

  prompt.get(

    ["instructions"],

    function (err, res) {

      if (err) {
        console.log(err);
        return;
      }

      console.log(res);
      pilotRover(res.instructions)

      console.log("travel log of the rover : \n", rover.travelLog);
      useInstructions()
    }
  )
}
useInstructions()





// // for (var i = 0; i<res.length; i++) {

// pilotRover(res.pilotRover.substring(0))
// // console.log('#')

// if (res.pilotRover.indexOf === "l") {
//   return pilotRover("l")

// } else if (res.pilotRover.indexOf === "r") {
//   return pilotRover("r")
// }
// else if (res.pilotRover.indexOf === "f") {
//   return pilotRover("f")
// }
// else if (res.pilotRover.indexOf === "y") {
//   return pilotRover("y")
// }
// else {
//   // console.log(err);
//   displayPrompt();
// }

      // }

//     });
// }



