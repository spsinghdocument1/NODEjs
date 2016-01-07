var express = require("express");
var login = express.Router();





login.get("/", function (req, res) {
    
    res.sendfile('./Views/Login/login.html');
    
});





module.exports = login;