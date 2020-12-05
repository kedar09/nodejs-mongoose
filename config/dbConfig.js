// Connection URL
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'github';

const dbUrl = url+dbName;
module.exports = dbUrl;

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/github", { useNewUrlParser: true });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("MongoDB Connected");
// });
