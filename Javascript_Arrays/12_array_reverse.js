const arr = [2, 4, 6, 8, 9];

const reverseArr = arr.reverse(); // reverses the array
console.log("Reversed Array:", reverseArr); // [9, 8, 6, 4, 2]

//Important interview point
//reverse() modifies the original array.

const arr1 = [1, 2, 3];
const result = arr1.reverse();

console.log(result); // [3, 2, 1]
console.log(arr1);    // [3, 2, 1]

//Q: How can you reverse an array without modifying the original array?

const arr2 = ["N", "I", "T", "Y", "A"];
const revArr2 = [...arr2].reverse(); // using spread operator to create a copy and then reverse it
console.log("Reversed Array without modifying original:", revArr2);