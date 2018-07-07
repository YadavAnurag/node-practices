const utils = require('./utils');


it('should add two numbers', ()=>{
    var res = utils.add(2,4);
    if(res!==6){
        throw new Error(`Expected 6 but got ${res}`);
    }
});

it('should square the given number',()=>{
    var res = utils.square(10);
    if(res!==100){  
        throw new Error(`Expected 100 but got ${res}`);
    }
});