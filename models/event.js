// EVENT MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create event schema
const eventSchema = new Schema({
  eventName: { type: String, required: true },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
