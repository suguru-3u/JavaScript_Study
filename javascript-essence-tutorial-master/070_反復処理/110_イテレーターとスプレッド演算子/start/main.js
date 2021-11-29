const arry1 = [1,2,3,4,5];
const arry2 = [...arry1];
console.log(arry2);



function sum(...args){
    let ret = 0;
    for(let v of args){
        console.log(v);
        ret += v;
    }
    return ret;
}   

const result = sum(1,2,3,4,5);
console.log(result);

const obj1 = {
    props1: 'value1',
    props2: 'value2',
    props3: 'value3'
}

Object.prototype[Symbol.iterator] = function* (){
    for(let key in this){
        yield[key,this[key]];
    }
}


const arry3 = [...obj1];

console.log(arry3);