function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

// Arguments
let result = runTest("Login", "pass", 320);
console.log(result);
// "Login: pass (320ms)"