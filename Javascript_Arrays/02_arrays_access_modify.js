let goodname = ["Kim", "Don", "Rama", "Hari", "David"];
console.log("Good names:", goodname); // accessing the array
console.log(goodname[0]); // accessing the first element

console.log(goodname.at(-1)); // accessing the last element
console.log(goodname.at(-2)); // accessing the second last element

// NOTE: -1, -2 and so on are used to access elements from the end of the array. 
// -1 refers to the last element, -2 refers to the second last element, and so on.

// Modifying an element in the array
goodname[1] = "John";
console.log("Good names after modification:", goodname); // accessing the modified array