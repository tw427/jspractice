// Factory Function example

// const personFactory = (name, age) => {
//     const sayHello = () => console.log('Hello!');
//     return { name, age, sayHello};
// };

// const jeff = personFactory('jeff', 27);

var myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myObject }
};

var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // this = <nav> element
};

for (var i = 0; i < links.length; i++) {
  (function () { console.log(this); }).call(links[i]);
}