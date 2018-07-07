const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passowrd: ''
});

conn.connect(function(err){
    if(err)
        console.error(err);
    else
        console.log('connected');

});