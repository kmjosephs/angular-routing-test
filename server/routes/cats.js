var express = require('express');
var router = express.Router();
var path = require('path');


router.get("/dog", function(req,res){
    res.json({message: "meow woof!"});
});

router.get("/", function(req,res){
    res.json({message: "meow"});
});


module.exports = router;
