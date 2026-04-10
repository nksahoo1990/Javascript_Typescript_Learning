function retry(testName, maxTries=3, duration=1000){
    return `retrying ${testName} for ${maxTries} time with ${duration} ms delay`;
}

retry("Login");
retry("Checkout", 5);
retry("API Test", 2, 500);

// Above function is using default parameters. If we do not pass any value for maxTries and 
// duration, it will take the default value of 3 and 1000 respectively. If we pass a value for 
//  maxTries, it will override the default value but duration will still take the default value. If we pass values for both maxTries and duration, it will override the default values for both parameters.
