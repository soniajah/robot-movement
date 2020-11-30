var models = require('../models')

exports.move = (req, res) => {
  res.send(models.movement.getMovementReport(req.body.roomDimension, req.body.startPosition, req.body.instructions))
}