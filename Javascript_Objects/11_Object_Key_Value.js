const obj = { a: 1, b: 2, c: 3 };

console.log("Keys are :", Object.keys(obj));
console.log("Values are :", Object.values(obj));
console.log("Entries are :", Object.entries(obj)); // key-value pairs in array format

const user = { name: "John", age: 30 };

// accessing keys and values using for...in loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}


