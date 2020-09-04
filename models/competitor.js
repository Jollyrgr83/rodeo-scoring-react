// COMPETITOR MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create competitor schema
const competitorSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  teamName: { type: String, required: false },
  groupNames: { type: String, required: false },
  organizationID: { type: String, required: true },
  tierID: { type: String, required: true },
  yearID: { type: String, required: true },
  competitorNumber: { type: String, required: true },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Competitor = mongoose.model("Competitor", competitorSchema);

module.exports = Competitor;
