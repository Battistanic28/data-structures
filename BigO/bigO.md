# Intro to Big O notation

## Objectives:
- Understand motivations behind Big O notation
- Describe what Big O notation is
- Simplify Big O expressions
- Define "time complexity" and "space complexity"
- Evaluate time/space complexity of various algorithms using Big O
- Describe a logarithm

### Motivations:
- How do we evaluate the best solution when various approaches are available?
- A language for classiying and comparing code is needed.
- Why does this matter? Performance grows more important with scale.

### How to classify the "Better" solutuion:
- Faster?
- Less memory intensive?
- More readable?

Speed and memory are typically the priority and focus.

### Measuring performance:
- Timers
    - can be useful for a quick/unscientific check
    - not super reliable
    - different results on different machines
    - different result on the same machine
    - Not enough precision for fast algorithms
- Counting Operations
    - Rather than counting time, count the number of simple operations (+, -, /, *) that need to run.
    - Ex. ```return n * (n+1) / 2;``` has 3 operations (3 calculations).
    - Ex. ```for (let i =1; i <= n; i++) {total += i;}``` in a loop - operations occur 1*n. Number of operations scale in proportion with n.

### Big O defined:
- Big O notation allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
- We consider Big O in the most extreme, "worst case" scenarios. Changes in runtime are apparent at scale.
- We really on care about general trends.

- Linear ```(f(n) = n)```
- Quadratic ```(f(n) = n^2)```
- Constant ```(f(n) = 1)```
- Cound be something entirely different.

### Simplifying Big O Expressions:
- Constants do not matter - ```O(2n)``` === ```O(n)```
- Smaller terms do not matter - ```O(1000n + 50)``` === ```O(n)```
- Constant runtime - ```O(n)```
    - Arithmetic Ops
    - Variable assignments
    - Accessing elements in an array (by index or key)
- n^2 runtime - ```O(n^2)```
    - Loops

### Space Complexity
- How much memory do we need to allocate in order to run our code?
- For our purposes, we care about the algorithm itself, not the inputs.

Rules of thumb:
- Most primitives (bool, number, undefined, null) are constant space.
- Strings require ```O(n)``` space, where n is the string length.
- Reference types are generally ```O(n)``` where n is the length (arrays) or num of keys (obj).

Examples
```javascript
    // O(1) complexity
    function logUpTo(n) {
        for (var i = 1; i <= n; i++) {
            console.log(i);
        }
    }
```
```javascript
    // O(1) complexity
    function logAtMost10(n) {
        for (var i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }
```
```javascript
    // O(n) complexity
    function subtotals(array) {
        var subtotalArray = Array(array.length);
        for (var i = 0; i < array.length; i++) {
            var subtotal = 0;
            for (var j = 0; j <= i; j++) {
                subtotal += array[j];
            }
            subtotalArray[i] = subtotal;
        }
        return subtotalArray;
    }
```

### Big O of Objects
- Obejcts are unordered
- Objects are fast!
- Object insertion/removal/access happens in constant time O(1).
- Searching is O(n) - linear time.
- Objects are unordered - there is no definitive beginning or end.

### Big O of Object methods
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- Object.hasOwnProperty - O(1)

### Big O of Arrays
- Arrays are ordered lists
- Retrieving data from an array by index is constant time - O(1)
- speed of insertion adn removal - it depends...
    - adding index to end of array is O(1)
    - adding data to beginning requires reindexing of all elements - O(n)
    - same goes for removing from beginning 
    - push/pop always faster than shift/unshift
- searching - O(n)
- access - O(1)

### Big O of Array methods
- map/filter/reduce etc - O(n)
- sort - O(n * log n)
