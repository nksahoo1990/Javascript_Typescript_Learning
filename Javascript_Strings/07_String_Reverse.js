// Using split(), reverse(), and join() methods to reverse a string

const name = "Nitya";
const reversedName = name.split("").reverse().join("");
console.log("Reversed Name:", reversedName); // Output: "atyinN"

// without using reverse() method

const str = "Nitya";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed String:", reversedStr); // Output: "atyinN"