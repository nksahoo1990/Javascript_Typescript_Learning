let obj = {name:"Sahoo", age: 36};

// Object property descriptor provides detailed information about a property of an object, including its value, writability, enumerability, and configurability.
// It allows you to control how a property behaves and can be used to define properties with specific characteristics.

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// Output: { value: 'Sahoo', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(obj, "age"));
// Output: { value: 36, writable: true, enumerable: true, configurable: true }