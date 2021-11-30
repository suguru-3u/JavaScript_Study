const obj = {a:0};
const json = JSON.stringify(obj);

localStorage.setItem('key',json);

const localData = localStorage.getItem('key');
const obj2 = JSON.parse(localData);
console.log(obj2);