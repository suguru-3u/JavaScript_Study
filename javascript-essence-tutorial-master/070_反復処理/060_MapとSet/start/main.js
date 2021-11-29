const map = new Map();
const key1 = {};

map.set(key1,'value1');
console.log(map.get(key1));

// map.delete(key1);
// console.log(map.get(key1));

for(const [k,v] of map){
    console.log(k,v);

}

const a = new Set();
a.add(key1);
const arry = Array.from(a);

for(let k of a){
    console.log(k);
}