#!/usr/bin/node

const size = parseInt(process.argv[2], 10); // Convert argument to an integer

if (isNaN(size) || size <= 0) {
    console.log("Missing size"); // Handle invalid input
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size)); // Print a row of 'X' repeated 'size' times
    }
}
