//@Dongning Wang 
var mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs');


// my schema goes here!

var Bottle = new mongoose.Schema({
   size: Number, 
   numDonated: Number
});

var Dog = new mongoose.Schema({
    name: String,
    age: Number, 
    foodReceived: Number
});

var User = new mongoose.Schema({
    username: String,
    password: String,
    bottlesDonated: [Bottle],
    dogsFostered: [Dog],
    dogFood: Number
});


var UserList = new mongoose.Schema({
    UserArray: [User]
});


mongoose.model('UserList', UserList);
mongoose.model('User', User);
mongoose.model('Dog', Dog);
mongoose.model('Bottle', Bottle);


// is the environment variable, NODE_ENV, set to PRODUCTION? 
if (process.env.NODE_ENV == 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 var fs = require('fs');
 var path = require('path');
 var fn = path.join(__dirname, 'config.json');
 console.log("test", __dirname);
 var data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 var conf = JSON.parse(data);
 var dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/final-project';
}

mongoose.connect(dbconf);