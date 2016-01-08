var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//ROUTES
var cats = require("./routes/cats");
var index = require('./routes/index');

//App Settings
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB Stuff
var mongoURI = "mongodb://localhost:27017/eta_cats";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.once("open", function(err){
    if(err){
        console.log("ERROR: ", err);
    }
    console.log("Mongo Connection Open");
});

app.use("/cat", cats);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});