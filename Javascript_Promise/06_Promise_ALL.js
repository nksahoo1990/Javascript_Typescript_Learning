let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");
// we can directly create resolved or rejected promises using Promise.resolve() and Promise.reject().

// Promise.all() is a method that takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved, or rejects if any of the promises in the array reject.
Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})

console.log("********************************");

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });

// If any of the promises in the array reject, the entire Promise.all() will reject immediately with that reason.
// In this case, since one of the promises rejects with "DB DOWN", the catch block will be executed, and "Failed: DB DOWN" will be logged to the console.