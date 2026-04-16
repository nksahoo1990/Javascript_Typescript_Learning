// void - If a function doesn't return anything, we can use void as the return type
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greeting1(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
// if a function is expected to return never, it means that the function will never complete normally. This can happen in two scenarios: when the function always throws an error or when it contains an infinite loop.
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}