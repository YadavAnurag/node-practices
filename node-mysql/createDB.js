const mysql = require('mysql');
var conn = mysql.createConnection({
    user:'root',
    password:'',
    host:'127.0.0.1'
});
conn.connect(function(err){
    if(err)
        console.error(err);
    else
        console.log('Connection Established');
    conn.query('CREATE DATABASE nodedb', function(err,result){
        if(err)
            console.error(err);
        else
            console.log('Database created',result);
    });    
});