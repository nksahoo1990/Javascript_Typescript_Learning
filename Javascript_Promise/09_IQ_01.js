// NOTE: Uncomment first then execute. Then it will give proper result.

// --------**** Interview Question 01 ****--------

// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });

// p.then(function (value) {
//     console.log("Answer:", value);
// });


// --------**** Interview Question 02 ****--------

// let p1 = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });

// p1.catch(function (err) {
//     console.log("Caught:", err);
// });



// --------**** Interview Question 03 ****--------

// let p2 = Promise.resolve(5);

// p2.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// });


// --------**** Interview Question 04 ****--------

// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     });

// --------**** Interview Question 05 ****--------

// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will NOT run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message);
//     });

// --------**** Interview Question 06 ****--------

// Promise.reject("Test failed")
//     .then(function (data) {
//         console.log("Data:", data);
//     })
//     .catch(function (err) {
//         console.log("Error:", err);
//     })
//     .finally(function () {
//         console.log("Cleanup done");
//     });


// --------**** Interview Question 07 ****--------


