// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var undskyldningSchema = new Schema({
  id: Number,
  indhold: { type: String, required: true},
});

// the schema is useless so far
// we need to create a model using it
var Undskyldning = mongoose.model('Undskyldning', undskyldningSchema);

module.exports = Undskyldning;