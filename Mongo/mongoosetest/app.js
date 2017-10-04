var mongoose = require('mongoose');
var mongoDB = 'mongodb://transformer:mingade@ds151014.mlab.com:51014/vitermongo';
var Undskyldning = require('./models/undskyldning');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Shit
var undskyld1 = new Undskyldning({
    id: 0,
    indhold: "Sjov ting her"
});

// undskyld1.save(function(err){
//     if(err) throw err;
//     console.log("Saved undskyld1");
// });

var query = Undskyldning.find({ 'id': 0 });
query.limit(1);

query.exec(function (err, e) {
    if (err) return handleError(err);
    console.log(e[0].indhold);
});