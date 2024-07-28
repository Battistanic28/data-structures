// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Solution A
function addUpTo_A(n) {
    let total = 0;

    for (let i =1; i <= n; i++) {
        total += i;
    }
    return total;
};

// Solution B
function addUpTo_B(n) {
    return n * (n+1) / 2;
}

// Run
// console.log('A', addUpTo_A(10))
// console.log('B', addUpTo_B(10))

// Measuring performance with timers
var t1 = performance.now();
addUpTo_A(1000000000);
var t2 = performance.now();

var t3 = performance.now();
addUpTo_B(1000000000);
var t4 = performance.now();

// Run
// console.log(`Time elapsed A: ${(t2-t1) / 1000}`)
// console.log(`Time elapsed B: ${(t4-t3) / 1000}`)

// Measuring performance by counting operations
