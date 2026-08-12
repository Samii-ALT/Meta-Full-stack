function fib(n) {
    // Base cases
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    // Recursion Cases
    return fib(n-1)+fib(n-2);   // recursion
}

console.log(fib(5));
console.log(fib(10));