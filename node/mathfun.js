//if input is even double it
//if input is odd print error

var maxTime = 1000;

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(v%2){
        setTimeout(function(){
            callback(new Error('odd Input'));
        }, waitTime);
    }
    else{
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

module.exports.evenDoubler = evenDoubler;
module.exports.foo = 'bar';