const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  assigned: {
    type: String,
    required: true,
    trim: true,
  },
  budget: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Event", eventSchema);
