// YEARS CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all year records
  findAll: function (req, res) {
    db.Years.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
