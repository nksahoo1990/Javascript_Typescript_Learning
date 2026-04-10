// This is a Basic type-1 function, which means no argument, no return. 
// Define
function greet() {
    console.log("Hi");
}

// Call
greet();

// ***********************//

// This is a Basic type-2 function, which means it takes arguments but does not return any value.
function greetByName(name){
console.log("Hi", name  );
}

greetByName("Nitya"); // calling the function with an argument

// ***********************//

// This is a Basic type-3 function, which means it does not take any arguments but returns a value.
function sayHello(){
    return "Hello Nitya";
}

let message= sayHello(); // calling the function and storing the return value
console.log(message); // printing the return value

// ***********************//

// This is a Basic type-4 function, which means it takes arguments and returns a value.
function summationNumber(a,b){
 return a+b;
}

let sumValue = summationNumber(4,8); // calling the function with arguments and storing the return value
console.log("Sum of numbers is: ", sumValue); // printing the return value