function sleep(callback,value){
    setTimeout(function(){
        console.log(value++);
        callback(value);
    },1000);
}

sleep(function(val){
    sleep(function(val){
        console.log(val);
    },val);
},0);

sleep(sleep,0);