let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported.
console.log(str.slice(0,5)); // Output: Login

console.log(str.slice(11)); // Output: Pass_001
// If end is omitted, slice extracts to the end of the string.

console.log(str.slice(-3)); // Output: 001
// Negative indexes count from the end of the string.

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));  // "Test"

// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-1)) ;  // "1"
