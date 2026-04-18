// 1D array,list - duplicate element
let results = ["pass", "fail", "pass"];

// 2D array, matrix. Array  inside an Array.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix.length); // Output: 3 - number of rows
console.log(matrix[0].length); // Output: 3 - number of columns in the first row

// Printing all elements of the matrix.

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

