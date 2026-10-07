/**
every() — Check if all match
every() checks whether all elements satisfy the condition.
It also returns true or false.
 */

const numbers = [2, 4, 6, 8];
const result = numbers.every(num => num % 2 === 0);
console.log(result);

//Output: true

const numbers1 = [2, 4, 7, 8];
const result1 = numbers1.every(num => num % 2 === 0);
console.log(result1);

//Output: false