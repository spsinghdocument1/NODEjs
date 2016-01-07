var express = require("express");
var Accounting = express.Router();





Accounting.get("/", function (req, res) {
    
    res.sendfile('./Views/Home/Home.html');
});





module.exports = Accounting;