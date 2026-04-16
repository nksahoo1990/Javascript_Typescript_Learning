// Return Values

function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(205);  // "success"
getStatus(404);  // "client error"
getStatus(500);  // "server error"

// NOTE: A function can return any type of value, including strings, numbers, objects, arrays, and even other functions. 
// The return statement is used to specify the value that a function should return when it is called. 
// If a function does not have a return statement, it will return undefined by default.

// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");

// Return multiple values via array or object

function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : pramod"}; - object
}