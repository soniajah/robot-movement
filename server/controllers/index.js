exports.index = (req, res) => {
  res.json({
      message: 'Welcome to the Robot movement application!'
  });
}
exports.movement = require('./movement')