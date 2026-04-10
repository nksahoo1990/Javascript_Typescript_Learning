let results = ["pass", "fail", "error","pass", "fail", "skip"];

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log("Index of 'pass':", results.indexOf("pass")); // 0
console.log("Index of 'fail':", results.indexOf("fail")); // 1

let res = results.includes("skip");
console.log("results includes 'skip':", res); // true

// lastIndexOf — searches from the end
let lastIndex= results.lastIndexOf("pass"); 
console.log("Last index of 'pass':", lastIndex); // 3

let nums = [10, 25, 53, 14, 50];
let ele =nums.find(x=> x>15); // returns the first element that satisfies the condition
console.log ("First element greater than 15 is:", ele); // 25

let lastNum = nums.findLast(x=> x>30); // returns the last element that satisfies the condition
console.log ("Last element greater than 30 is:", lastNum); // 53

let firstNumIndex = nums.findIndex(x=> x>15); // returns the index of the first element that satisfies the condition
console.log ("Index of first element greater than 15 is:", firstNumIndex); // 1

let lastNumsIndex = nums.findLastIndex(x=> x>30); // returns the index of the last element that satisfies the condition
console.log ("Index of last element greater than 30 is:", lastNumsIndex); // 4