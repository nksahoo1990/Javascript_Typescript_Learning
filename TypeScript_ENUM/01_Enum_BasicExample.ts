// enum is a special "class" that represents a group of constants (unchangeable variables).

enum TestStatus{
    Pass="PASS",
    Fail="FAIL",
    Skip="SKIP",
    Pending="PENDING" 
}

console.log("Test Status: " + TestStatus.Pass);
console.log("Test Status: " + TestStatus.Fail);
console.log("Test Status: " + TestStatus.Skip);
console.log("Test Status: " + TestStatus.Pending);
