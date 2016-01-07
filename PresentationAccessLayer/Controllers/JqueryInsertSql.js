var express = require("express");
var JqueryInsertSqll = express.Router();




JqueryInsertSqll.get("/", function (req, res) {
    res.sendfile('./Views/JqueryInsert/JqueryInsertSq.html');
    
});




module.exports = JqueryInsertSqll;