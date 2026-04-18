function openBrowser() {
    return new Promise(function (resolve) { // A Promise is created and returned immediately when the function is called.
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg) { // .then() is used to handle the resolved value of the promise. It takes a callback function that receives the resolved value as an argument.
        console.log("Step 1", msg);
        return goToLogin(); // Returning a new promise from the .then() callback allows chaining multiple asynchronous operations in a sequential manner.
    }).then(function (msg) { // Each .then() in the chain waits for the previous promise to resolve before executing its callback function.
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });