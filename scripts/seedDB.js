// DATABASE SEED
//dependencies
const mongoose = require("mongoose");
// bring in models
const db = require("../models");
//establish mongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactRodeoDB");
// import seed data
const competitorSeed = require("./seeds/competitorSeed");
const eventSeed = require("./seeds/eventSeed");
const scoreSeed = require("./seeds/scoreSeed");
const tierSeed = require("./seeds/tierSeed");
const yearSeed = require("./seeds/yearSeed");

// remove existing tier collection entries and add seed items
db.Tier.remove({})
  .then(() => db.Tier.collection.insertMany(tierSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


