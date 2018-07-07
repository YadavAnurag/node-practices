const http = require('http');

var port = 4000;

const hostname = '127.0.0.1';

http.createServer(function(req,res){
    var body = 'How are You this is Anurag Yadav';
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Type':'text/plain',
        'Content-Length': contentLength
    });
    res.end(body);
}).listen(port, hostname, ()=>{
    console.log(`Server is running as http://{$hostname}:{$port}`);
});
