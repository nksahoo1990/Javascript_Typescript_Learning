// Objects are collections of key-value pairs. They are used to store and organize data in a structured way. 
// Each key is a string (or symbol) that serves as an identifier for the corresponding value, which can be of any data type, including other objects.
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

// -------


let a = { status: "pass" };
console.log(a.status); // key can be accessed with dot notation
console.log(a["status"]); // key can also be accessed with bracket notation, which is useful when the key is stored in a variable or when the key is not a valid identifier (e.g., contains spaces or special characters).

let a1 = { status: 'pending' }; 
console.log(a1.status);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);


let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);
// NOTE: a and b are references to the same object in memory. When we change b.status, it also changes a.status because they point to the same object.
//  This is an important concept in JavaScript regarding objects and references.


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); 
// comparing two objects with === checks if they reference the same object in memory, not if their contents are the same.
//  Since c and d are different objects, this will return false.

// json format. keys in double quotes, values can be string, number, boolean, null, array or another json. No functions allowed in JSON.
const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);

// JavaScript object format. keys can be without quotes, values can be of any type, including functions.
const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);
