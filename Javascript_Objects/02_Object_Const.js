const user = {
    name: "Nitya",
    age : 36,
    city: "Berhampur"
}

console.log(user.age);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Dynamic property access
const key = "city";
console.log(user[key]);


// Adding/modifying properties
user.city = "NYC"; // objects are mutable, we can change their properties even if they are declared with const
user.age = 31;
user.country = "India"; // adding new property
console.log(user);