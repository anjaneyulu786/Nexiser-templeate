var express = require("express");
var fs = require('fs');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/'));

router.get("/",function(req,res){
 res.sendFile("index.html");
});

 //app.use("/",router);

app.listen(3000,function(){
 //console.log(app.settings.env + ';__dirname:' + __dirname + ';');
 console.log('NexiserApp UI Server started @Port : ' + this.address().port);
});