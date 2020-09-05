// YEARS MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create years schema
const yearsSchema = new Schema({
  value: { type: Number, required: false },
  type: { type: String, required: true },
  tierID: { type: Schema.Types.ObjectId, ref: "Tier", required: false },
  eventID: { type: Schema.Types.ObjectId, ref: "Event", required: false },
  yearID: { type: Schema.Types.ObjectId, ref: "Years", required: false },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Years = mongoose.model("Years", yearsSchema);

module.exports = Years;
