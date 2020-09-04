// SCORE CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all score records
  findAll: function (req, res) {
    db.Score.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
