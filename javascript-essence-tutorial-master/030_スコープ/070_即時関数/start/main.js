function a(){
    console.log('a');
}

a();

let c = (function(){
    console.log('aa');

    let d = 0;
    let f = 10;

    function privateFn(){
        console.log('private');
    }

    function publicFn(){
        console.log('public' + f++);
    }

    return {
        d,
        privateFn,
        publicFn
    };

})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();