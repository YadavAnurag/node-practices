var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
    if(err){
        throw err
    }
    else{
        console.log('Connection established');
        var dbo = db.db('mydb');

        dbo.createCollection('customer', (err, res)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log("Collection Created!");
                db.close();               
            }
        });
    }
});