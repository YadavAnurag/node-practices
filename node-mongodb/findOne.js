const MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://locahost:27017/';

MongoClient.connect(url, (err, db)=>{
    if(err)
        throw err;
    var dbo = db.db('mydb');
    dbo.collection('customer').findOne({}, (err, result)=>{
        if(err)
            throw err;
        console.log(result.name);
        db.close();
    });
});