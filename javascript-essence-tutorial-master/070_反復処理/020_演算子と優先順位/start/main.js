// let a = (1 + 2) * 3;

let a = 0;

let b = a++;
console.log(a,b);

function fn(){
    let a = 0;
    return a++;
}

console.log(fn());