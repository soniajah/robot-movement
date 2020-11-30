exports.getMovementReport = function(roomDimension, position, movementInstructions) {
  for(let moveIndex = 0; moveIndex < movementInstructions.length; moveIndex++) {
    position = move( roomDimension, position, movementInstructions[moveIndex] )
  }
  return position
}

function move(roomDimension, position, movement) {
  switch (position.direction) {
    case "N":
      switch (movement) {
        case "L": return {...position, direction: "W"}
        case "R": return {...position, direction: "E"}
        case "F": return {...position, y: canMoveForward(position, roomDimension) ? position.y - 1 : position.y}
      }
      return position
    case "S":
      switch (movement) {
        case "L": return {...position, direction: "E"}
        case "R": return {...position, direction: "W"}
        case "F": return {...position, y: canMoveForward(position, roomDimension) ? position.y + 1 : position.y}
      }
      return position
    case "E":
      switch (movement) {
        case "L": return {...position, direction: "N"}
        case "R": return {...position, direction: "S"}
        case "F": return {...position, x: canMoveForward(position, roomDimension) ? position.x + 1 : position.x}
      }
      return position
    case "W":
      switch (movement) {
        case "L": return {...position, direction: "S"}
        case "R": return {...position, direction: "N"}
        case "F": return {...position, x: canMoveForward(position, roomDimension) ? position.x - 1 : position.x}
      }
      return position
  }
}

function canMoveForward(position, roomDimension) {
  switch (position.direction) {
    case "N": return (position.y - 1 >= 0) ? true : false
    case "S": return (position.y + 1 < roomDimension.y) ? true : false
    case "E": return (position.x + 1 < roomDimension.x) ? true : false
    case "W": return (position.x - 1 >= 0) ? true : false
  }
}