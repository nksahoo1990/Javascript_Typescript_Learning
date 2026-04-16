interface TestCase{
    id: number;
    name: string;
    status: string;
    duration: number;
}

let testcase1: TestCase = {
    id: 1,
    name: "Login Test - Valid Credentials",
    status: "Passed",
    duration: 120
}

console.log("TC-" + testcase1.id + ": " + testcase1.name + " - " + testcase1.status + " (" + testcase1.duration + " seconds)" );


let testcase2: TestCase = {
    id: 1,
    name: "Login Test - Invalid Credentials",
    status: "Failed",
    duration: 1200
}
console.log("TC-" + testcase2.id + ": " + testcase2.name + " - " + testcase2.status + " (" + testcase2.duration + " seconds)" );