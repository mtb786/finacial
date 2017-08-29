var express=require('express');
var router=express.Router();
var MongoClient = require('mongodb').MongoClient;
router.get('/admin',(req,res)=>
{
    MongoClient.connect(url, function(err, db) {
        
            var cursor = db.collection('fin').find();
        
            cursor.each(function(err, doc) {
        
                console.log(doc);
        
            });
        }); 
    

});
