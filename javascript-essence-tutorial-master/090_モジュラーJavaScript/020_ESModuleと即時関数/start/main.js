const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + privateVal++);
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }
})();

const moduleB = (function(publicFn,publicVal){
  publicFn();
  publicFn();
  publicFn();
})(moduleA);



