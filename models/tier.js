// TIER MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create tier schema
const tierSchema = new Schema({
  tierName: { type: String, required: true },
  teamBoolean: { type: Boolean, required: true },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Tier = mongoose.model("Tier", tierSchema);

module.exports = Tier;
