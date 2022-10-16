const Animal = {
  speak() {
    console.log(`${this.name} makes a noise`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Extending class to Animal object
Object.setPrototypeOf(Dog.prototype, Animal);

const a = new Dog('April');

// a.speak();