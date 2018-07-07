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
        
        var roll = 2016021023;
        var sql = 'select * from student where roll = '+mysql.escape(roll);
        conn.query(sql, function(err, result, fields){
            if(err)
                console.error(err);
            else
                // console.log('Select * from student where roll = 2016021021', result[0].name);
                var rows = result.length;
                while(rows){
                    console.log('Select * from student where roll like %23', result[0].name);
                    --rows;
                }
        });
});