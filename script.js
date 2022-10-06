const personFactory = (name, age) => {
  const sayHello = () => console.log("Hello!");
  return {name, age, sayHello};
};

const jeff = personFactory('jeff', 27);

console.log('jeff', 27);

jeff.sayHello();