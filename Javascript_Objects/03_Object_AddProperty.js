let config = {}; // Create an empty object
config.browser = "Chrome"; // Add a new property 'browser' with the value "Chrome"
config.timeout = 3000;
config.timeout = 5000; // latest value will be considered.
console.log(config); // Output: { browser: 'Chrome', timeout: 5000 } latest value of timeout is 5000
delete config.browser;
console.log(config);