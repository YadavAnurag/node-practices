const http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Hello Anurag');
}).listen(5000, '127.0.0.1');
// listen(process.env.PORT, process.env.IP);
console.log('Server running..... at '+ process.env.IP+':'+process.env.PORT);

