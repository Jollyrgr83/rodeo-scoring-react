// EVENT CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all event records
  findAll: function (req, res) {
    db.Event.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
