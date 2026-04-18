function placeOrder(item, callback) {
    console.log("placing order for " + item);
    callback(); // function call.
}

// NOTE: Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// It allows us to handle asynchronous operations in JavaScript.

function printOrder() {
    console.log("Order placed successfully!");
}

// First Ways:

// Calling the placeOrder function with the printOrder function as a callback.
placeOrder("Burger", printOrder);

// Second Ways: Using an anonymous function as a callback.

placeOrder("Burger", function () {
    console.log("Anonymous Fn, I am also a function without name!")
});

// Third Way - Arrow Function as a callback.
placeOrder("Burger", () => {
    console.log("Arrow Function, I am also a function without name!")
});

