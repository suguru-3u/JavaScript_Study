function a(name) {
    console.log('hello ' + name);
}

const tim = {name:'Tim'};

const b = a.bind(null, 'Tim');

b();

a.apply(tim,['tim']);
a.call(tim,'tim');