#!/usr/bin/node

function factorial(n) {
    if (isNaN(n) || n <= 0) {
        return 1; // Factorial of NaN is 1
    }
    if (n === 1) {
        return 1; // Base case: factorial(1) is 1
    }
    return n * factorial(n - 1); // Recursive case
}

const num = parseInt(process.argv[2], 10); // Convert argument to integer
console.log(factorial(num)); // Call the function and print the result
