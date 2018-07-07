var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
    if(err)
        throw err;
    var dbo = db.db('mydb');
    var myobj = {name:'Anurag', address:'Tanda Ambedkarnagar'};

    dbo.collection('customer').insertOne(myobj, (err, res)=>{
        if(err)
            throw err;
        console.log('1 document inserted');
        db.close();
        
    });
});