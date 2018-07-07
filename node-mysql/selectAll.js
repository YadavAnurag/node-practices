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
    
        var sql  = "SELECT * FROM student";
        conn.query(sql, function(err, result, fields){
            if(err)
                console.error(err);
            else
                console.log('All Records from student table\n', result );
        });   
});