const { add } = require("./index.js");

// Normal test cases
console.log("Test 1:", add(2, 3) === 5);
console.log("Test 2:", add(10, 5) === 15);
console.log("Test 3:", add(-1, 1) === 0);

// Edge cases
console.log("Edge 1 (zero):", add(0, 0) === 0);
console.log("Edge 2 (negative):", add(-5, -5) === -10);
console.log("Edge 3 (large numbers):", add(1000000, 2000000) === 3000000);
