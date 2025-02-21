function fibonacci(n) {
    // Convert string numbers to actual numbers
    n = Number(n);  

    if (isNaN(n)) return "OOPS"; // Handles invalid input
    if (n === 0) return 0; // Handles zero input
    if (n < 0) return "OOPS"; // Handles negative input
    if (n === 1 || n === 2) return 1; // First two elements are 1

    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};




// Do not edit below this line
module.exports = fibonacci;
