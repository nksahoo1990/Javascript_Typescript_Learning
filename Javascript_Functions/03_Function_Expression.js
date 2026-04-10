// Function Expression - Removes name of the function and assign it to a variable. 
// It is also called Anonymous Function.
let getName= function (name){ 
    return `Hello , ${name}`;
}

let nickname =getName("Sahoo");
console.log(nickname);

// NOTE: It can be Const or Let. It doesn't matter. 
// But it is recommended to use const for function expressions to prevent reassignment.
