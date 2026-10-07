// String Conversion


// To string conversion
(200).toString(); // "200"
true.toString();  // "true"
console.log((400).toString());
console.log(true.toString());

// To number conversion
Number("42");  //  42

parseInt("42px");  // 42
parseFloat("3.14rem"); //3.14


let str = "hello"; //. Strings are immutable in nature in JavaScript. It means string values won't change.
str[0] = "H";
console.log(str);
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);

console.log("pass,fail,skip".split(",").length);
