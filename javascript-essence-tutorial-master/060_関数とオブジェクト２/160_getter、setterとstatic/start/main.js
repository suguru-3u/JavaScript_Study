function Person1(name, age) {
	this.name = name;
	this.age = age;
}

class Person2{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	get name(){
		console.log('a');
		return this.name;
	}

	set name(name){
		this.name = name;
	}

}