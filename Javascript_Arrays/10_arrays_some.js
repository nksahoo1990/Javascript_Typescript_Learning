/**
 some() — Check if at least one matches
some() checks every element until it finds one that satisfies the condition.
It returns true or false.
 */

const numbers = [1, 2, 3, 4, 5];
const result = numbers.some(num => num > 4);
console.log(result);

//Output: true