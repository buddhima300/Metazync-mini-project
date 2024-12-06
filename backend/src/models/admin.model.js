const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  service: String,
});

const serviceModel = mongoose.model("serviceModel", serviceSchema);
module.exports = { serviceModel };
