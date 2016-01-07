var express = require("express");
var Simple_sql_sp = express.Router();
var bodyParser = require("body-parser");
var s = require('../../DataAccessLayer/DAL/JqSqlStoreProcerDAL.js')

Simple_sql_sp.use(bodyParser.urlencoded({ extended: false }));




Simple_sql_sp.get("/", function (req, res) {
    res.sendfile('./Views/JqueryInsert/Simple_sql_sp/Simple_Sql_sp.html');
    
});

Simple_sql_sp.post("/", function (req, res) {
    var Send = req.body.Name;

    
    var b = new s.JquerInsertDAL(Send)
    res.end(b.Result());
    console.log(b.Result());

});

module.exports = Simple_sql_sp;