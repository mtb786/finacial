// Node Module Import 
var express=require('express');
var bodyParser= require('body-parser');
var url = 'mongodb://localhost/fin';
// Express Instance
var app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',(req,res)=>{
	res.send('Root Routing');
})

// app.use('/users',require('./routes/users'));


app.listen(process.env.PORT || 3000, function(){
	console.log('listening on');
  });

