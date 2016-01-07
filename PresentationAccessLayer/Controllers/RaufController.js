var express = require("express");
var Rauf = express.Router();
var item = [
     {id:1,name : 'Saurabh'},
    { id: 2, name : 'Mayank' },
    { id: 3, name : 'Himanshu' }
];




Rauf.get("/", function (req, res) {
    
//    res.sendfile('./Views/Rauf/H1.html',
//    {
//title:'my app',
//items : item

//    });
    
    res.sendfile('./Views/Rauf/H1.html');
    
});
Rauf.post("/", function (req, res) {
    //var newitm = req.body.newItem;
    var nPass = req.param('newItem');
    res.redirect('/');
});




module.exports = Rauf;