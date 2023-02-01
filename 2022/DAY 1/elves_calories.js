const fs = require('fs')
 
// Reading input from input file
// Input format
// 1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000
fs.readFile('input.txt', 'utf-8', (err, data) => {
    // If there was an error in reading input from file
    if (err) throw err;

    console.log(data);
})