// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a; // b copies the value of a, not the reference
b = 20; // changing b does not affect a
console.log("value of a:", a); // Output: 10
console.log("value of b:", b); // Output: 20

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function

let obj1 = {val: 10};
let obj2 = obj1; // obj2 copies the REFERENCE, not the object
obj2.val = 20; // changing obj2.val also changes obj1.val because they reference the same object
console.log("value of obj1.val:", obj1.val); // Output: 20
console.log("value of obj2.val:", obj2.val); // Output: 20