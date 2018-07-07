const MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
    if(err){
        throw err;
    }
    var dbo = db.db('mydb');
    var myobj = [
        {name:'darkMoon', address:'Tanda Ambedkarnagar'},
        {name:'Gopal', address:'Tanda Ambedkarnagar'},
        {name:'Sahu', address:'Gorakhpur'},
        {name:'Verma', address:'Mau'},
        {name:'Tanu', address:'Lucknow'},
        {name:'Avi', address:'Faizabad'}
    ];

    dbo.collection('customer').insertMany(myobj, (err, res)=>{
        if(err)
            throw err;
        console.log('Number of documents inserted: '+res.insertedCount);
        db.close();
    });
});