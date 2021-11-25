function hello(name){
    name = name || 'Tom';
    console.log('hello ' + name);
}

hello('bob');
hello();

let name2 = 'Bob';
name2 && hello(name2);