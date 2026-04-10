let fruits = []; // empty array

let fresh_fruits = ["chiku", "banana", "watermelon", "grapes", "mango", "papaya", "apple"];   

console.log(fresh_fruits);

let mixedVar = [1, "Nitya", 55.5, true, null]; // array with mixed data types
console.log(mixedVar);

// Array Constructor
let scores = new Array(3); // creates an array of length 3 with undefined values
let scores1 = new Array(1,2,3); // creates an array with the specified elements
console.log(scores);
console.log(scores1); 

let test = Array.of (10, 20, 30); // creates an array with the specified elements
console.log(test[0]); // accessing the first element

//Array.from() method creates a new array from an array-like or iterable object
let chars = Array.from("Hello"); // creates an array from a string
console.log("Characters Array Contains: ",chars); // ['H', 'e', 'l', 'l', 'o']


console.log("Length of the array:", fresh_fruits.length); // length of the array
console.log("First fruit:", fresh_fruits[0]); // accessing the first element
console.log("Last fruit:", fresh_fruits[fresh_fruits.length - 1]); // accessing the last element


