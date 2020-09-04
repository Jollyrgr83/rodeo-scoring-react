// COMPETITOR CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all competitor records
  findAll: function (req, res) {
    db.Competitor.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
