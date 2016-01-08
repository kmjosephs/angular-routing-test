var express = require('express');
var app = express();
var cats = require("./routes/cats");
var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use("/cat", cats);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});