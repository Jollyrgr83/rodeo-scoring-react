// ORGANIZATION CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all organization records
  findAll: function (req, res) {
    db.Organization.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
