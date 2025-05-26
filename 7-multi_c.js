#!/usr/bin/node

const x = parseInt(process.argv[2], 10); // Convert argument to an integer

if (isNaN(x)) {
    console.log("Missing number of occurrences"); // Only prints if x is not a number
} else if (x > 0) { 
    for (let i = 0; i < x; i++) {
        console.log("C is fun"); // Print "C is fun" x times
    }
}

