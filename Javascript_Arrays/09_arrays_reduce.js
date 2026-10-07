/**  

It is used when you want to process all elements and produce one final value.

Syntax for reduce

 array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue); **/


const numbers = [10, 20, 30, 40];
const result = numbers.reduce((sum, num) => sum + num, 0);
console.log(result);

// Output: 100

/**
 * Understand the execution

The 0 is the initial value.
Initial sum = 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100

Final result:

100
  
 */