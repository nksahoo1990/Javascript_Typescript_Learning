// Primitive types

let name1: string = "John";
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 398765434567;
// let pi: float = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];


// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";

console.log(name1);
console.log(age);
console.log(pi);
console.log(distance_to_moon);
console.log(isActive);
console.log(nothing);
console.log(notDefined);
console.log(numbers);
console.log(names);
console.log(anything);
console.log(unknown);