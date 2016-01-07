var JqSqlStoreProCerDAL = function (Send) {
    var deserializedUsers = JSON.parse(Send);
    var FirstName = deserializedUsers[0].FirstName;
    var LastName = deserializedUsers[0].LastName;
    var MIDILENAME = deserializedUsers[0].MIDILENAME;
    var EMAIL = deserializedUsers[0].EMAIL;
    var MOBILENO = deserializedUsers[0].MOBILENO;
    var FATHERNAME = deserializedUsers[0].FATHERNAME;
    
    this.Result = function () { return FirstName; }
};




module.exports.JquerInsertDAL = JqSqlStoreProCerDAL;