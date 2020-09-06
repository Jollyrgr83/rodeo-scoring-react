// DATABASE SEED 01
// This file will add entries for all tiers, organizations, events, and years (values of 2017, 2018, and 2019)
//dependencies
const mongoose = require("mongoose");
// bring in models
const db = require("../models");
//establish mongoDB connection
mongoose.connect("mongodb://localhost/reactRodeoDB");
// import seed data
const competitorSeed = require("./seeds/competitorSeed");
const eventSeed = require("./seeds/eventSeed");
const organizationSeed = require("./seeds/organizationSeed");
const scoreSeed = require("./seeds/scoreSeed");
const tierSeed = require("./seeds/tierSeed");
const yearsSeed = require("./seeds/yearSeed");

// remove existing tier entries and add seed items
db.Tier.remove({})
  .then(() => db.Tier.collection.insertMany(tierSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted into Tier (2)");
    // process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// remove existing organization entries and add seed items
db.Organization.remove({})
  .then(() => db.Organization.collection.insertMany(organizationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted into Organization (15)");
    // process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// remove existing event entries and add seed items
db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted into Event (15)");
    // process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// remove existing year entries and add seed items
db.Years.remove({})
  .then(() => db.Years.collection.insertMany(yearsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted into Years (3)");
    // process.exit(0);
    // remove existing competitor entries
    db.Competitor.remove({}).then((data) => { console.log("Competitors deleted")});
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
