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
        console.log('Connection Established');

        var sql = "UPDATE STUDENT SET name='Clahser' where roll = 0";

        conn.query(sql, function(err, result){
            if(err)
                console.error(err);
            else
                console.log('UPDATE STUDENT SET name= clasher where roll=0\n Result',result.message+'\nFields fields');
        })
});