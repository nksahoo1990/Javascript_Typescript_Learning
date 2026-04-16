// Interface with optional and readonly for API response
interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object; // ? means Optional
    responseTime?: number;
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

