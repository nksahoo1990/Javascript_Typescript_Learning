let url = "https://staging.vwo.com/api/login?retry=true";

// includes() method checks if a string contains a specified substring and returns true or false accordingly.
console.log(url.includes("staging")); // true
console.log(url.includes("production")); // false

// startsWith() and endsWith() methods check if a string starts or ends with a specified substring, respectively.
console.log(url.startsWith("https"));
console.log(url.endsWith("true"));
console.log(url.endsWith("Sahoo"));

// indexof() and lastIndexOf() methods return the index of the first and last occurrence of a specified substring, respectively. If the substring is not found, they return -1.
console.log(url.indexOf("v"));
console.log(url.indexOf("vwo")); 
console.log(url.lastIndexOf("a"));


console.log(url.indexOf("Sahoo")); // -1 (not found)
// Here it checks for the substring "Sahoo" in the URL, which is not present, so it returns -1.

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // regex pattern to search for "login" in the URL, and it returns the index of the first occurrence of "login" in the URL. If "login" is not found, it returns -1.


