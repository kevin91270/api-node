const dbConfig = require('../config/dbconfig')
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movieModel")(mongoose);
db.users = require("./userModel")(mongoose);

module.exports = db;