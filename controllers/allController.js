// ALL CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all records for view page
  findAll: function (req, res) {
    const dataObj = {};
    db.Tier.find({})
      .then((data) => { 
        dataObj.tier = data; 
        db.Event.find({})
        .then((data) => {
          dataObj.event = data;
          db.Organization.find({})
          .then((data) => {
            dataObj.organization = data;
            db.Years.find({ type: "year" })
            .then((data) => {
              dataObj.year = data;
              res.json(dataObj);
            });
          });
        });
      }); 
  },
  find: function (req, res) {
    const dataObj = {};
    db.Tier.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
