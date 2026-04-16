let url = "https:/www.app.vwo.com";

// String Creation using double quotes
let message1 = "Hello, World!";
console.log(message1); // Output: Hello, World!

// String Creation using single quotes
let message2 = 'Welcome to JavaScript!';
console.log(message2); // Output: Welcome to JavaScript!

// String Creation using backticks (template literals)
let name = "Nitya";
let message3 = `Hello, ${name}!`;
console.log(message3); // Output: Hello, Nitya!

// String creation using Multiline.
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

// String() constructor (converts other types)
// String() constructor can be used to convert other types to strings.
// It can be used to convert numbers, booleans, null, undefined, and even arrays to their string representations.
console.log(String(200));
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"

// Here it converts 200, true, null, and the array [1, 2] to their string representations.