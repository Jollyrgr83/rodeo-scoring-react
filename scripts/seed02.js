// DATABASE SEED 02
// This file will add remaining Years entries (tiers and events)
//dependencies
const mongoose = require("mongoose");
// bring in models
const db = require("../models");
//establish mongoDB connection
mongoose.connect("mongodb://localhost/reactRodeoDB");
const tierRefArr = [
  { tierName: "Apprentice", year: 2017 },
  { tierName: "Journeyman", year: 2017 },
  { tierName: "Apprentice", year: 2018 },
  { tierName: "Journeyman", year: 2018 },
  { tierName: "Apprentice", year: 2019 },
  { tierName: "Journeyman", year: 2019 },
];
const eventRefArr = [
  { eventName: "Hurtman Rescue", year: 2017, tierName: "Apprentice" },
  { eventName: "Knot and Phase Tying", year: 2017, tierName: "Apprentice" },
  { eventName: "Backyard Light Change Out", year: 2017, tierName: "Apprentice" },
  { eventName: "Fuse Replacement", year: 2017, tierName: "Apprentice" },
  { eventName: "Written Test", year: 2017, tierName: "Apprentice" },
  { eventName: "Hurtman Rescue", year: 2017, tierName: "Journeyman" },
  { eventName: "Knot and Phase Tying", year: 2017, tierName: "Journeyman" },
  { eventName: "Double Cutout Change", year: 2017, tierName: "Journeyman" },
  { eventName: "Crossarm Change", year: 2017, tierName: "Journeyman" },
  { eventName: "Down Primary", year: 2017, tierName: "Journeyman" },
  { eventName: "Hurtman Rescue", year: 2018, tierName: "Apprentice" },
  { eventName: "Knots and Crossarm Lift", year: 2018, tierName: "Apprentice" },
  { eventName: "Dead End Bell Change", year: 2018, tierName: "Apprentice" },
  { eventName: "Obstacle Course", year: 2018, tierName: "Apprentice" },
  { eventName: "Written Test", year: 2018, tierName: "Apprentice" },
  { eventName: "Hurtman Rescue", year: 2018, tierName: "Journeyman" },
  { eventName: "Obstacle Course", year: 2018, tierName: "Journeyman" },
  { eventName: "600A Switch Change", year: 2018, tierName: "Journeyman" },
  { eventName: "Crossarm Change", year: 2018, tierName: "Journeyman" },
  { eventName: "Knots and Crossarm Lift", year: 2018, tierName: "Journeyman" },
  { eventName: "Hurtman Rescue", year: 2019, tierName: "Apprentice" },
  { eventName: "Knot Tying", year: 2019, tierName: "Apprentice" },
  { eventName: "Backyard Light Change Out", year: 2019, tierName: "Apprentice" },
  { eventName: "Obstacle Course", year: 2019, tierName: "Apprentice" },
  { eventName: "Written Test", year: 2019, tierName: "Apprentice" },
  { eventName: "Hurtman Rescue", year: 2019, tierName: "Journeyman" },
  { eventName: "Cutout Change", year: 2019, tierName: "Journeyman" },
  { eventName: "Down Primary", year: 2019, tierName: "Journeyman" },
  { eventName: "Knot Tying", year: 2019, tierName: "Journeyman" },
  { eventName: "Insulator Change", year: 2019, tierName: "Journeyman" }
];
const tierObj = {};
const eventObj = {};
// add tiers
for (let i = 0; i < tierRefArr.length; i++) {
  db.Tier.findOne({ name: tierRefArr[i].tierName }).then((data) => {
    tierObj.tierID = data._id;
    db.Years.findOne({ name: tierRefArr[i].year }).then((data) => {
      tierObj.yearID = data._id;
      db.Years.create({
        type: "tier",
        tierID: tierObj.tierID,
        yearID: tierObj.yearID,
      });
    });
  });
}
// add events
for (let i = 0; i < eventRefArr.length; i++) {
  db.Tier.findOne({ name: eventRefArr[i].tierName }).then((data) => {
    eventObj.tierID = data._id;
    db.Years.findOne({ name: eventRefArr[i].year }).then((data) => {
      eventObj.yearID = data._id;
      db.Event.findOne({ name: eventRefArr[i].eventName }).then((data) => {
        eventObj.eventID = data._id;
        db.Years.create({
          type: "event",
          tierID: eventObj.tierID,
          eventID: eventObj.eventID,
          yearID: eventObj.yearID
        });
      });
    });
  });
}
