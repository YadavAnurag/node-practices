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

        var sql = 'select * from student where name = ? or roll = ?';
        
        conn.query(sql, ['shivam',2016021021 ], function(err, result, fields){
            if(err)
                console.error(err);
            else   
                console.log('Result with multiple placeholder', result);
        });
});