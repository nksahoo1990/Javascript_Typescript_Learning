function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);



console.log("A: Test suite started");

setTimeout(function () {
    console.log("B: Slow API test finished");
}, 1000);

console.log("C: Fast unit test finished");