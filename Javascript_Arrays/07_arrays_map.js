const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with each element squared
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers); // [1, 4, 9, 16, 25]

//map() runs a function on every element and creates a new array.

const users = ["admin", "tester", "developer"];
const usernames = users.map(user => user.toUpperCase());
console.log(usernames);

//map() normally returns an array with the same number of elements as the original array.