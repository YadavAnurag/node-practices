const mysql  = require('mysql');

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

        var sql = 'select user.id  as uid, product.id as pid from user join product on user.favorite_product = product.name';

        conn.query(sql, function(err, result){
            if(err)
                console.error(err);
            else
                console.log('Connection Established');

                console.log('result\n', result);
        });
});