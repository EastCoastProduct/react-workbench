'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  finished: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
