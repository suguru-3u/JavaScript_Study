const targetObj = { a: 0 };
const handler = {
    set:function(target,prop,value,receiver){
        console.log(prop);
        // target[prop] = value;
        throw new Error('cannot add prop');
    },
    get:function(target,propreceiver){
        console.log(prop);
        return target[prop];
    },
    deleteProoerty:function(target,prop){
        console.log(prop);
        delete target[prop];
    }
}

const pxy = new Proxy(targetObj,handler);
pxy.a = 1;