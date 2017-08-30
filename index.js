// Node Module Import 
var express=require('express');
var bodyParser= require('body-parser');
//var url = 'mongodb://localhost/fin';
// Express Instance
var app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',(req,res)=>{
	res.send('Root Routing');
})

// app.use('/users',require('./routes/users'));
var port = process.env.PORT || 8080;
app.listen( port, function() {
  console.log( 'Node server is running on port ');
  });
