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
        var sql = 'create table student(id int not null primary key auto_increment, name varchar(100) not null)';
        conn.query(sql, function(err, result){
            if(err)
                console.error(err);
            else
                console.log('Table created', result);
        });
});