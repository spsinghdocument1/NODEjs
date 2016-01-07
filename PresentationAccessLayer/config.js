var query = function (sql,callback) {


//======================================================================= CONFIF

	
    
        var mssql = require("mssql");

        var config = {
            server: 'ADMINMAYANK',
            driver: 'tedious',
            database: 'Inventory_MVC2',
            security: true,
            user: 'sa',
            password: '1234',
             options :{encrypt:false}

        }
        //console.log("---------------------------------------");
        mssql.connect(config, function (err)
        {
         //   console.log("===============================================");
            console.log(err);
      
            var cmd = new mssql.Request();
            cmd.query(sql, function (err_con, data) {


                callback(data);


            });

        });

    







	//=======================================================



};



module.exports.query = query;