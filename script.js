class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Wolf extends Dog {
  speak() {
    super.speak();
    console.log(`${this.name} howls`);
  }
}

const a = new Wolf('April');