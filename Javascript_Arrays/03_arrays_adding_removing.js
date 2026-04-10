let arr = ["sahoo", 1, true, "Pass"];
// Adding elements to the end of the array using push()
arr.push("Krishnansh");
console.log("Array after push:", arr); // ["sahoo", 1, true, "Pass", "Krishnansh"]

arr.push("Fail", 5);
console.log("Array after push:", arr); // ["sahoo", 1, true, "Pass", "Krishnansh", "Fail", 5]

// remove from last element using pop()
arr.pop();
console.log("Array after pop:", arr); // ["sahoo", 1, true, "Pass"]

// Adding elements to the beginning of the array using unshift()
arr.unshift("Hello");
console.log("Array after unshift:", arr); 

// remove from first element using shift()
arr.shift();
console.log("Array after shift:", arr);

let title = ["sahoo", "panda", "Jena", "khan"];
title.splice(3, 0, "Singh"); // adds "Singh" at index 3 without removing any element
console.log("Array after splice (add):", title); // ["sahoo", "panda", "Jena", "Singh", "khan"]

title.splice(1, 2); // removes 2 elements starting from index 1
console.log("Array after splice (remove):", title); 