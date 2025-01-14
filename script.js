//complete this code
class Animal {
	constructor(species){
			this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this.species} make a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof");	
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr")
	}
}

const myCat = new Cat("miyu");
myCat.makeSound();
myCat.purr();


const myDog = new Dog("bhaw");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
