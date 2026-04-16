// Transforming Strings

let str = "  Hello, World!  ";

// uupperCase() and lowerCase() methods
console.log(str.toUpperCase()); // Output: "  HELLO, WORLD!  "
console.log(str.toLowerCase()); // Output: "  hello, world!  "

// trim() method
console.log(str.trim()); // Output: "Hello, World!"
// trim() removes whitespace from both ends of the string.

// Replace methods.
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // Output: "Test: PASS. Retry: FAIL."  ( replace first only)

console.log(msg.replaceAll("FAIL", "PASS")); // Output: "Test: PASS. Retry: PASS." ( replace all )

console.log(msg.replace(/FAIL/g, "PASS"));   // replace all with Regex


// Concatenation
console.log("Hello" + " " + "World"); // Output: "Hello World"
console.log("Hello".concat(" ", "World")); // Output: "Hello World"
console.log(`${"Hello"} ${"World"}`); // Output: "Hello World"

//split() and join() methods

let state = "Odisha, Karnataka, Tamil Nadu, West Bengal";

let statesList = state.split(", ");
console.log(statesList); // Output: ["Odisha", "Karnataka", "Tamil Nadu", "West Bengal"]

console.log("Hello".split(""));
// Output: ["H", "e", "l", "l", "o"]

let joinedState = statesList.join(" | ");
console.log("States List after joining:", joinedState); // Output: "Odisha | Karnataka | Tamil Nadu | West Bengal"

console.log("test_login_pass".split("_").join(" ")); // "test login pass"


// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);