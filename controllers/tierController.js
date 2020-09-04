// TIER CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all tier records
  findAll: function (req, res) {
    db.Tier.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
