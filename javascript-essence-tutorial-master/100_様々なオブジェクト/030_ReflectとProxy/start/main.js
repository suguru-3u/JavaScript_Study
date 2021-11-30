const targetObj = { 
  a: 0 ,
  get value(){
    return this.a;
  }
};

const handler = {
  get: function(target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    if(target.hasOwnProperty(prop)) {
      return Reflect.get(target,prop);
    } else {
      return -1;
    }
  }
}
const pxy = new Proxy(targetObj, handler);

