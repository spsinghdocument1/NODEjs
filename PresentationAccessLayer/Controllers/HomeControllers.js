var express = require("express");
var Home = express.Router();





Home.get("/", function (req, res) {
    
    res.sendfile('./Views/Home/Home.html');
    
});





module.exports = Home;