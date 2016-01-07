var sqlconnection = require('../../PresentationAccessLayer/config.js');

var reg ="";
var JquerInsertDAL = function (Send) {

     var deserializedUsers = JSON.parse(Send);
    var FirstName = deserializedUsers[0].FirstName;
    var LastName = deserializedUsers[0].LastName;
    var MIDILENAME = deserializedUsers[0].MIDILENAME;
    var EMAIL = deserializedUsers[0].EMAIL;
    var MOBILENO = deserializedUsers[0].MOBILENO;
    var FATHERNAME = deserializedUsers[0].FATHERNAME;

    //this.Result = function () { return FirstName; }
	
	 var sql = "insert into nodejs (FirstName,LastName,MIDILENAME,EMAIL,MOBILENO,FATHERNAME) VALUES ('" + FirstName + "','" + LastName + "','" + MIDILENAME + "','" + EMAIL + "','" + MOBILENO + "','" + FATHERNAME + "')";
  // reg ="NOT Inserted Record";
  sqlconnection.query(sql, function (data) {
   //console.log("===============================================");
reg ="Inserted successfully";
      
    });
	console.log("-------------------------------------------------------55555---------------");
	  console.log(reg);
	this.Result = function () { return reg =="" ? "Not  Inserted " :reg  ; }
};



module.exports.JquerInsertDAL = JquerInsertDAL;

//===========================================================================================================================Table Fatch ============================
var table2 ="";

var JquerTableDAL = function () {
var sql = "select * from nodejs";



 sqlconnection.query(sql, function (data) {

       // console.log(data);
		//table =data;
		table2 = data;
		//console.log(table2);
		
    });
	//console.log(table2);
this.Result = function () { return  table2 =="" ? "Not  Inserted " : table2  ; }
};



module.exports.JquerTableDAL = JquerTableDAL;


