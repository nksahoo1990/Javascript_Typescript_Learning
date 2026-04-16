let unknownVar: unknown = "This is an unknown type";

if (typeof unknownVar === "string") {
    console.log("Hi, Welcome");
}

// function annotation.
function greeting(title:string): string {
    return `Hi, ${title}!`;
}

console.log(greeting("Sahoo"));

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};