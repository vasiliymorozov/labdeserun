// Example values
let dx = 0;
let dy = 0;
let offsets = [-1, 2, -3]; // Example offsets array

let i = 0; // Example index

let isInside = dx === 0 && dy === 0 || offsets[i] < 0;
console.log(isInside); // Output: true (since offsets[0] is -1, which is less than 0)
