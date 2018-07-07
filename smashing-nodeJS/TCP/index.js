const net = require('net');
const fs = require('fs');

var count=0, users={};
var server = net.createServer(function(conn){
    console.log('new connection established'+count);
    conn.write('Welcome to node-chat\n'+count+' peoples are connected\n'+'Please write your name and press enter\n');
    conn.setEncoding("utf8");
    count++;

    //nickname for current connection
    var nickname;
    var msg = '';

    conn.on('data',(data)=>{

        //remove enter  character
        // data = data.replace('\r\n', '');
        
        if(data!='\r\n')
            msg+=data;
        else{
            console.log(msg);

            //first piece of data is nickname
            if(!nickname){
                if(users[msg]){
                    conn.write('\nnickname already in use. try again....\n');
                    return;
                }
                else{
                    nickname = msg;
                    users[msg] = nickname;
                    console.log(users);
                    
                    for(var i in users){
                        process.stdout.write(users[i]+' joined the room\n');
                    }
                }
            }
            else{
                for(var i in users){
                    if(i!=nickname){
                        process.stdout.write(users[i]+' : '+msg);
                    }
                }
            }
            msg = '';
        }
    });
    conn.on('close',()=>{
        count--;
    });
});

server.listen(3000, function(){
    console.log('server is listening on port 3000');
});