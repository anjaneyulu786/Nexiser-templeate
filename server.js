var express = require("express");
var fs = require('fs');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/'));

router.get("/",function(req,res){
 res.sendFile("index.html");
});

 //app.use("/",router);

app.listen(80,function(){
 //console.log(app.settings.env + ';__dirname:' + __dirname + ';');
<<<<<<< HEAD
   console.log('NexiserApp UI Server started @Port : ' + this.address().port);
});
=======
 console.log('NexiserApp UI Server started @Port : ' + this.address().port);
});
>>>>>>> e03eeee4169d981e8cf4801b6092e31323ff5017
