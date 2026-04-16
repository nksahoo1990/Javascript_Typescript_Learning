
// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.

myName("Nitya"); // ✅ Declaration — hoisted, works before definition

function myName(name){
    console.log(`My name is ${name}`);
}

// **************//

sayHi("Bob"); // ❌ TypeError: sayHi is not a function

const sayHi = function (name) { // wherever const , let keywords used their hoisting won't work.
    return `Hi, ${name}!`;
};