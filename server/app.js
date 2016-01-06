var express = require('express');
var app = express();
var path = require('path');

app.set("port", process.env.PORT || 5000);

app.get("/kitties", function(req,res){
    res.json({message: "meow"});
});

app.get("/*", function(req,res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.set("port", process.env.PORT || 5000), function(){
    console.log("Listening on port: ", app.get("port"));
});