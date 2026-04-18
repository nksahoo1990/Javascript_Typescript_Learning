Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

// Promise .allSettled() is a method that takes an array of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise. Each object has a status property that is either "fulfilled" or "rejected", and a value property (for fulfilled promises) or reason property (for rejected promises) that contains the result or error of the promise.

// all the promises are executed and we get the result of each promise regardless of whether it was fulfilled or rejected.
// This is useful when you want to wait for all promises to complete and handle their results individually without short-circuiting on the first rejection, which is what happens with Promise.all().