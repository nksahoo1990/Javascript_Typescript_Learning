//Without destructuring:

const user = {
    name: "Nitya",
    age: 36
};

let name = user.name;
let age = user.age;

//With destructuring:

const user1 = {
    name1: "Nitya",
    age1: 39
};

let { name1, age1 } = user1;

console.log(name1); // Nitya

// Destructuring means extracting values from arrays or objects and assigning them to variables in a clean, short way.

// Rename variables
const { name1: userName, age1: userAge } = user1;
console.log(userName);
console.log(userAge);

// Default values
const { country = "USA" } = user;
console.log(country);