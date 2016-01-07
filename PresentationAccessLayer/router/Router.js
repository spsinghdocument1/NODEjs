

var express = require("express");
var Router = express.Router();


module.exports = function (app) {
  
    //switch (app) {
    //    case app.get( "/"):
    //        app.use("/", require('../Controllers/LoginController.js'))
    //        break;

    //    case app.get( "/Home"):
    //        app.use("/Home", require('../Controllers/HomeControllers.js'))
    //        break;
    //    //case app.use("/Accounting"):
    //    //    app.use("/Accounting", require('../Controllers/AccountingController.js'))
    //    //    break;
            
    //    //case app.use("/Admin"):
    //    //    app.use("/Admin", require('../Controllers/AdminController.js'))
    //    //    break;
            
    //    //case app.use("/JqueryInsrtSql"):
    //    //    app.use("/JqueryInsrtSql", require('../Controllers/JqueryInsertSql.js'))
    //    //    break;
    //    //case app.use("/Simple_sql"):
    //    //    app.use("/Simple_sql", require('../Controllers/Simple_sqlController.js'))
    //    //    break;
    //    //case app.use("/Simple_sql_SP"):
    //    //    app.use("/Simple_sql_SP", require('../Controllers/Simple_sql_SPController.js'))
    //    //    break;
    //   // default: 
//}
          //  app.use("/", require('../Controllers/RaufController.js'))
            app.use("/", require('../Controllers/LoginController.js'))
            app.use("/Home", require('../Controllers/HomeControllers.js'))
            app.use("/Accounting", require('../Controllers/AccountingController.js'))
            app.use("/Admin", require('../Controllers/AdminController.js'))
            app.use("/JqueryInsrtSql", require('../Controllers/JqueryInsertSql.js'))
            app.use("/Simple_sql", require('../Controllers/Simple_sqlController.js'))
            app.use("/Simple_sql_SP", require('../Controllers/Simple_sql_SPController.js'))
    
};





//module.exports = Router;