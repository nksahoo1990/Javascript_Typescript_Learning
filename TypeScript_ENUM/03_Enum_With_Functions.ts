enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High);

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low));
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical));
console.log("Severity name:", Severity[2]);