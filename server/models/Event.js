// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  // Add additional fields as needed for your events
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
