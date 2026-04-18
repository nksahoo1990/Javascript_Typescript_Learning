let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 500
});


Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})

// race() returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
// In this case, since fastServer resolves after 100ms and slowServer resolves