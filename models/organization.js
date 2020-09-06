// ORGANIZATION MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create organization schema
const organizationSchema = new Schema({
  name: { type: String, required: true },
  coopBoolean: { type: Boolean, required: true },
  modifiedDate: { type: Date, default: Date.now }
});
// configure schema as model
const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
