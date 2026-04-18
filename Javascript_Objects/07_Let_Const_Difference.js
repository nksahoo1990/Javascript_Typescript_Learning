let config = { browser: "chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "firefox";
config.timeout = 5000;

console.log("Configuaration before assignment is : ", config);

config = { browser: "edge" };
console.log("Configuaration after assignment is : ", config);

//NOTE: Above code config is defined as let type, so reassigmnment is allowed.



const config1 = { browser: "chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "firefox";
config1.timeout = 5000;

console.log("Configuaration before assignment is : ", config1);

config1 = { browser: "edge" }; // ❌ Error: Assignment to constant variable. Reassignment is not allowed for const variables.
console.log("Configuaration after assignment is : ", config1);

// Above code config is defined as const type, so reassigmnment is not allowed.



