let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!"); // resolve is a callback function that indicates the promise is fulfilled successfully.
    } else {
        reject("Order Cancelled!") // reject is a callback function that indicates the promise is rejected or failed.
    }
})

console.log(order);
// A Promise is an OBJECT. It wraps a value that will be available later.