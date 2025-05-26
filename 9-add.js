#!/usr/bin/node

function add(a, b) {
    return a + b; // Function that returns the sum of two numbers
}

const arg1 = parseInt(process.argv[2], 10); // Convert first argument to an integer
const arg2 = parseInt(process.argv[3], 10); // Convert second argument to an integer

console.log(add(arg1, arg2)); // Call the function and print the result
