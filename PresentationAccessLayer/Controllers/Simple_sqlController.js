var express = require("express");
var Simple_sql = express.Router();
var bodyParser = require("body-parser");
var s = require('../../DataAccessLayer/DAL/JqueryInsertDAL.js')
Simple_sql.use(bodyParser.urlencoded({ extended: false }));




Simple_sql.get("/", function (req, res) {
console.log("=======================================1");
    
  
   res.sendfile("./Views/JqueryInsert/Simple_sql/Simple_Sql.html" ,{title : 'AngularJS',
items : [  
{id :1 , desc : 'foo'},

{id :2 , desc : 'sdfg'},
{id :3 , desc : 'sdfg'}
]

});
  
 
   

    
 
    
});

Simple_sql.post("/", function (req, res) {

var record ="";
    var Send = req.body.Name;
	if(req.body.Name == "Table")
	{
	var b = new s.JquerTableDAL()
	record =b.Result();
	//record ="Table";
	console.log(b.Result());
	res.json(record);
	}
	
	else
	{
	var b = new s.JquerInsertDAL(Send)
	record =b.Result();
	console.log(b.Result());
	res.end(record);
	console.log("+++++++++++++++++++");
	 res.redirect('/');
	}

   
});

module.exports = Simple_sql;