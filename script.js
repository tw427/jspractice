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
// const myDataName = 'height';
// const myDataValue = '1.75m';
// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Smith',
//     },
//     age: 32,
//     bio(){
//         console.log(`${this['name']['first']} ${this['name']['last']} is ${this['age']} years old.`)
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this['name']['last']}`)
//     },
// };

// person.height will now display myDataValue (1.75m)
// person[myDataName] = myDataValue;

// Constructor example
// function Greeting(name, breed, color) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.greeting = function() {
//           console.log(`Hello, said ${this.name} the ${this.breed}`)
//         }
//     }
    
// const cat = new Greeting('Bertie', 'Cymric', 'white');
// const cat2 = new Greeting('Elfie', 'Aphrodite Giant', 'ginger');
    
// cat.greeting();
// cat2.greeting();



// -----------------------------------
// Palindrome exercise
// -----------------------------------

// const palindromes = function (str) {
//     let strArr = str.split('');
//     let length = strArr.length - 1;
//     let revStr = '';
//     let comparison = '';
//     let punctCheck = ['!', ',', '?', '.', ' '];

//     for (i = length; i >= 0; i--) {
//         if (!punctCheck.some(e => strArr[i] == e)) {
//             revStr += strArr[i];
//         }
//     }

//     for (j = 0; length >= j; j++) {
//         if (!punctCheck.some(e => strArr[j] == e)) {
//             comparison += strArr[j];
//         }
//     }

//     if (revStr.toLowerCase() == comparison.toLowerCase()) {
//         return true;
//     }

//     return false;

    
// };

// -----------------------------------
// Fibonacci exercise
// -----------------------------------

// const fibonacci = function(fib) {
//     let fibStart = [1, 1];
//     let sum;

//     if (fib < 0) {
//         return "OOPS";
//     }

//     for (i = 0; fib > i; i++) {
//         sum = fibStart[i] + fibStart[i + 1];
//         fibStart.push(sum);
//     }

//     return fibStart[fib - 1];
// };

// -----------------------------------
// Find the oldest with JavaScript object / array methods
// -----------------------------------

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(people) {
    let currYear = new Date().getFullYear();

    const yearsLived = people.reduce((total, current) => {
        if (current.yearOfDeath === undefined) {
            total = currYear - current.yearOfBirth;
            current.age = total;
        } else {
            total = current.yearOfDeath - current.yearOfBirth;
            current.age = total;
        }
    }, 0)

    const oldest = people.sort((a, b) => a.age > b.age ? 1 : -1);

    console.log(oldest, oldest[oldest.length - 1]);
};