let str = "Hello, World!";

// Length property. 
// Lenth count starts with 1. So, the length of "Hello, World!" is 13.
console.log("Length of the string:", str.length); // Output: 13

// Accessing characters in a string using index.
// String indexing starts with 0. So, the first character 'H' is at index 0, and the last character '!' is at index 12.
console.log("String at index 0 :", str[0]);
console.log("String at index 7 :", str[7]);

// charAT() method returns the character at a specified index in a string.
console.log("Character at index 0 using charAt():", str.charAt(4)); // Output: o

// charCodeAt() method returns the Unicode of the character at a specified index in a string.
console.log("Unicode of character at index 0 using charCodeAt():", str.charCodeAt(0)); // Output: 72 (Unicode for 'H')


