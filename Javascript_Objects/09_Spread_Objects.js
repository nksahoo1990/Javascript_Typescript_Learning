const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy); // Output: { a: 1, b: 2 } - copy of obj1
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 } - merged obj1 and obj2

// This keyword is used to spread the properties of an object into another object.
// It allows you to create a new object by copying the properties of an existing object or merging multiple objects together. The spread operator is denoted by three dots (...). When used with objects, it creates a shallow copy of the original object, meaning that nested objects will still reference the same memory location.
const user = {
    name: "Nitya Krushna",

    sayMyName(lastname) {
        this.name += lastname; // this refers to the current object (user) and allows us to access and modify its properties. In this case, we are appending the provided lastname to the existing name property of the user object.
        return this.name;
    }
}

console.log("My name is :", user.sayMyName(" Sahoo"));
