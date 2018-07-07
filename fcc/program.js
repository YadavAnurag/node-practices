//1st exercise
// console.log('HELLO WORLD');


//2nd exercise

// var arguments = process.argv;
// var sum = 0;
// for(var i = 2; i<process.argv.length;i++){
//     sum+=Number(process.argv[i]);
// }
// console.log(sum);


//3rd exercise


// const fs = require('fs');
// var pathToFile = process.argv[2];
// var buf = fs.readFileSync(pathToFile);
// var str = buf.toString();
// var lineArray = str.split("\n");
// console.log(lineArray.length-1);


//4th exercise

const fs = require('fs');
fileContents = fs.
fs.readFile(process.argv[2], function countLine(error, fileContents){

    if(error){
        return console.log(error);
    }
    else{
        fileContents = process.argv[2].toString();
        console.log((fileContents.split('\n')).length-1);
    }
    
});