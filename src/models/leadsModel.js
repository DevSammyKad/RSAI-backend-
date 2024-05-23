const mongoose = require('mongoose');

const leadsSchema = new mongoose.Schema({
  leadName: { type: String },
  leadEmail: { type: String },
  leadWhatsAppNumber: { type: String },
  leadCourse: { type: String },
  leadAge: { type: String },
  leadGender: { type: String },
  leadNote: { type: String },
  leadStatus: { type: String },
  leadCreatedAt: { type: Date, default: Date.now },
  leadUpdatedAt: { type: Date, default: Date.now },
  leadDeletedAt: { type: Date, default: null },
  leadAssignedTo: { type: String, default: null },
  leadAssignedAt: { type: Date, default: null },
});

const Leads = mongoose.model('Leads', leadsSchema);

module.exports = Leads;
