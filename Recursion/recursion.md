# Recursion

## Objectives
- Define what recursion is and how it can be used.
- Understand the 2 essential components of a recursize function.
- Visualize the call stack to better debug and understand recursive functions

### Definition
- Recursion is a process (a function in our case) that calls itself.
- sometimes recursion provides a cleaner alternative to iteration.

### How do recursive functions work behind the scenes?
- in almost all program languages, there is a built in data structure that manages what happens when functions are invoked. In javascript, this is known as the **Call Stack**.
- any time a function is invoked it is placed (pushed) on top of the call stack.
- when javascript see the return keyword or when the function ends, the compiler will remove (pop) from the stack.
- when we write recursive functions, we keep pushing new functions on to the call stack. In fact, we keep pushing the same function again and again.

### Components of any recursive function
**Input**: the function is called over and over, but with a different input value each time.

**Base Case**: the condition that when met, ends recursion.

### A simple recursive function
```javascript
function countDown(num) {
    if (num <= 0) { // <-- the Base Case
        console.log('All done!')
        return;
    };
    console.log(num);
    num--;
    countDown(num);
}

// call function
countDown(5)
```