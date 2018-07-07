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

        var sql = 'SELECT * FROM STUDENT ORDER BY roll desc';

        conn.query(sql, function(err, result, fields){
            if(err)
                console.error(err);
            else
                console.log('Connection Established');
                console.log('Select * from student order by roll desc\n', result);
        });
});