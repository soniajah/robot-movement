const libs = require('../libs')

test('the instructions RFRFFRFRF with roomDimension (5,5) and startPosition (1,2,N) will return 1 3 N', () => {
  const roomDimension = {
    x: 5,
    y: 5
  }
  const startPosition = {
    x: 1,
    y: 2,
    direction: "N"
  }
  const instructions = "RFRFFRFRF"
  const result = libs.movement.getMovementReport(roomDimension, startPosition, instructions)
  expect(result.x + " " + result.y + " " + result.direction).toBe("1 3 N")
})

test('the instructions RFLFFLRF with roomDimension (5,5) and startPosition (0,0,E) will return 3 1 E', () => {
  const roomDimension = {
    x: 5,
    y: 5
  }
  const startPosition = {
    x: 0,
    y: 0,
    direction: "E"
  }
  const instructions = "RFLFFLRF"
  const result = libs.movement.getMovementReport(roomDimension, startPosition, instructions)
  expect(result.x + " " + result.y + " " + result.direction).toBe("3 1 E")
})

