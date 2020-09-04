// SCORE MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create score schema
const scoreSchema = new Schema({
  yearID: { type: String, required: true },
  competitorID: { type: String, required: true },
  eventID: { type: String, required: true },
  score: { type: Number, required: false },
  timeMinutes: { type: Number, required: false },
  timeSeconds: { type: Number, requied: false },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
