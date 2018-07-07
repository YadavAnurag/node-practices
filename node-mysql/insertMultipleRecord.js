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

        var sql = "insert into student(name, roll) VALUES ?";
        var values = [
            ['Gopal', 2016021021],
            ['darkMoon', 2016021022 ],
            ['shivam', 2016021023],
            ['Tanu', 2016021024]
        ];

        conn.query(sql, [values], function(err,result){
            if(err)
                console.error(err);
            else
                console.log('Multiple Records inserted total', result.affectedRows);
        });
});