exports.getMovementReport = function(roomDimension, position, movementInstructions) {
  for (instruction of movementInstructions) {
    position = move( roomDimension, position, instruction )
  }
  return position
}

function move(roomDimension, position, movement) {
  switch (position.direction) {
    case "N":
      switch (movement) {
        case "L": return {...position, direction: "W"}
        case "R": return {...position, direction: "E"}
        case "F": return {...position, y: (position.y - 1 >= 0) ? position.y - 1 : position.y}
      }
      return position
    case "S":
      switch (movement) {
        case "L": return {...position, direction: "E"}
        case "R": return {...position, direction: "W"}
        case "F": return {...position, y: (position.y + 1 < roomDimension.y) ? position.y + 1 : position.y}
      }
      return position
    case "E":
      switch (movement) {
        case "L": return {...position, direction: "N"}
        case "R": return {...position, direction: "S"}
        case "F": return {...position, x: (position.x + 1 < roomDimension.x) ? position.x + 1 : position.x}
      }
      return position
    case "W":
      switch (movement) {
        case "L": return {...position, direction: "S"}
        case "R": return {...position, direction: "N"}
        case "F": return {...position, x: (position.x - 1 >= 0) ? position.x - 1 : position.x}
      }
      return position
    default:
      return position
  }
}