// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100 - Age 2 is still referencing the defined age on line 2

let name = 'Chris';
let name2 = name;
console.log(name, name2); // Chris, Chris
name = 'Christopher';
console.log(name, name2); // Christopher, Chris

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
console.log(team); // ["Wes", "Sarah", "Ryan", "Lux"]
console.log(players); // ["Wes, "Sarah", "Ryan", "Lux"]
// now here is a problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); // Returns a new array, and no longer a reference

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Chris';
console.log(team4); // ["Wes", "Sarah", "Ryan", "Chris"];
console.log(players); // ["Wes", "Sarah", "Ryan", "Lux"];

// Could also do the following:
const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Chris Gardner',
  age: 26
};

// and think we make a copy:
const captain = person;
captain.number = 99;
// This will also change the person object, since this is a reference as well

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99});

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const chris = {
  name: 'Chris',
  age: 26,
  wife: {
    name: 'Kelly',
    age: 26
  }
};

const dev = Object.assign({}, chris);
dev.name = 'Christopher';

console.log(chris); // Object {age: 26, name: 'Chris', wife: { age: 26, name: 'Kelly' }}
console.log(dev); // Object {age: 26, name: 'Christopher', wife: { age: 26, name: 'Kelly' }}

// Everything seems fine so far. Here's where the 1 level deep reference comes in, though
dev.wife.lastName = 'Gardner'
console.log(chris.wife); // Object {name: 'Kelly', age: 26, lastName: 'Gardner'}
console.log(dev.wife); // Object {name: 'Kelly', age: 26, lastName: 'Gardner'}
// The second level is still referencing the original object

// To fix this you could do this with a clone deep function if you really needed to

// Or, you could do this without a clone deep function with something like this:

const dev2 = JSON.parse(JSON.stringify(chris)); // This will turn everything into a string to allow you to copy everything, then parse it back into JSON.

