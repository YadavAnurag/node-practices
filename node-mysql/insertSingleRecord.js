const mysql = require('mysql');

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodedb'
});

conn.connect(function(err){
    if(err)
        console.error(err);
    else
        console.log('Connection Estabilished');
        
        var sql = 'INSERT INTO student(name) values("Anurag")';
        conn.query(sql, function(err, result){
            if(err)
                console.error(err);
            else 
                console.log('Data Inserted', result);
        });
});
