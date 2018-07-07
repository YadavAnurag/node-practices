const MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
    if(err)
        throw err;
    var dbo = db.db('mydb');
    var myobj = [
        {_id:1, name:'Ankit', address:'Lucknow'},
        {_id:2, name:'Shivam', address:'Kanpur'},
        {_id:3, name:'Potato', address:'Delhi'},
        {_id:4, name:'FamousPotato', address:'Kashmir'}
    ];

    dbo.collection('product').insertMany(myobj, (err, res)=>{
        if(err)
            throw err;
        console.log(res);
        db.close();
    });
});
