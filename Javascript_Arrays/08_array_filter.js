// filter() is used when you want to select only elements that satisfy a condition.

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(num => num > 3);
console.log(result);

//OP: [4, 5, 6]

//---------------------------


const testCases = [
    { name: "Login", status: "Pass" },
    { name: "Checkout", status: "Fail" },
    { name: "Search", status: "Pass" },
    { name: "Payment", status: "Fail" }
];

const failedTests = testCases.filter(test => test.status === "Fail");
console.log(failedTests);

// Find() returns the first element that satisfies the condition,
// while filter() returns all elements that satisfy the condition.