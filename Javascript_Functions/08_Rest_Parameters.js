function logResults(suitename,...results){
    console.log(`${suitename}`);
    console.log(`${results.join(", ")}`)
}

logResults("Auth Suite", "pass", "fail", "pass", "skip");

// NOTE: ... it is used to collect the remaining arguments into an array. 
// In the above example, results will be an array containing ["pass", "fail", "pass", "skip"].