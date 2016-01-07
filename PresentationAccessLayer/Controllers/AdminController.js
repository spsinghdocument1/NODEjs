var express = require("express");
var Admin = express.Router();




Admin.get("/", function (req, res) {
    
    res.sendfile('./Views/Admin/Admin_Index.html');
});





module.exports = Admin;