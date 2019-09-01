const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log(`Hello, ${dogs[0].name}!`);

// Styled
console.log('%c I am some great text', 'font-size: 20px; background: red');

// warning!
console.warn('OH NO!');

// Error :|
console.error('OH NO!');

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 2, 'That is wrong!'); // Only fires when something is wrong

// clearing
// console.clear() - Clears the console

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p); // Will give a dropdown with more info

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
}) // This can get a little messy in the console without console.group
// Could also use groupCollapsed over group to make the group collapsed by default

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

// table
console.table(dogs);