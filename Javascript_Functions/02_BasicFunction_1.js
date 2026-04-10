function getResult (score){

    return score >= 30 ? "Pass" : "Fail"; 

}

//getResult(30); // Pass
console.log(getResult(30)); // Pass

function printName(name){
    return "hello " + `${name}`;
}

console.log(printName("Alice")); // hello Alice