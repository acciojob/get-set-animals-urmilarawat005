// Animal Class
class Animal {
  constructor(species) {
    this._species = species; // Private property for species
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat Class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // Call the constructor of Animal
  }

  // Method for purring
  purr() {
    console.log("purr");
  }
}

// Dog Class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // Call the constructor of Animal
  }

  // Method for barking
  bark() {
    console.log("woof");
  }
}

// Example Usage

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
