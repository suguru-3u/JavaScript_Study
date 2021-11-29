// function* gen(){
//     if(){
//         yield ;
//     }else{
//         return ;
//     }
// }

// function* gen(){
//     yield 1;
//     yield 2;
//     return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* genIterator(max = 10){

    let i = 0;
    while(i < max){
        yield i++;
    }
}

const it = genIterator(10);

let a = it.next();
while(!a.done){
    console.log(a.value);
    a = it.next();
}

const onj = {
    [Symbol.iterator]:genIterator
}

for(let i of genIterator()){
    console.log(i);
}