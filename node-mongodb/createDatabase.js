var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db)=>{
    if(err)
        console.error(err);
    else
        console.log('mydb Database created');
        db.close();
});