new Promise(function(resolve,reject){
    console.log('promise');
    setTimeout(function(){
        resolve('good');
    },1000);
}).then(function(data){
    console.log(data);
    // throw new Error();
    return data;
}).then(function(data){
    console.log(data);
    // throw new Error();
    return data;
}).catch(function(data){
    console.log(data);
}).finally(function(){
    console.log('finally');
});

console.log('global end');