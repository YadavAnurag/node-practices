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
        
        var sql = 'select roll, name from student';
        conn.query(sql, function(err, result, fields){
            if(err)
                console.error(err);
            else
                console.log('Select roll, name from student', result);
                console.log(fields);
        });
});