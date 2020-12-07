const libs = require('../libs')

exports.move = (req, res) => {
  res.send(libs.movement.getMovementReport(req.body.roomDimension, req.body.startPosition, req.body.instructions))
}