function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}


function Japanaese(name,age){
  Person.call(this,name,age);
}

Japanaese.prototype = Object.create(Person.prototype);