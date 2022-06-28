// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My Menu',
// }

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof(menu[key]) == 'number') {
//             //learned the importance that you must assign the value to the result of the equation
//             //so we apply menu[key] = menu[key] * 2
//             menu[key] *= 2;
//         }
//     }
// }

// Declare value name to use dot notation
const myDataName = 'height';
const myDataValue = '1.75m';
const person = {
    name: {
        first: 'Bob',
        last: 'Smith',
    },
    age: 32,
    bio(){
        console.log(`${this['name']['first']} ${this['name']['last']} is ${this['age']} years old.`)
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this['name']['last']}`)
    },
};

// person.height will now display myDataValue (1.75m)
person[myDataName] = myDataValue;

// Constructor example
function Greeting(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function() {
          console.log(`Hello, said ${this.name} the ${this.breed}`)
        }
    }
    
const cat = new Greeting('Bertie', 'Cymric', 'white');
const cat2 = new Greeting('Elfie', 'Aphrodite Giant', 'ginger');
    
cat.greeting();
cat2.greeting();