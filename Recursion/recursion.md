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

### More interesting
```javascript
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(4)
```
`sumRange` is an interesting example of the call stack because the calculations can't resolve until num === 1

### Writing factorial recursively

This is a classic recursion example. Calculating the factorial could easily be accomplished with a `for` loop, howeverwe can also use recursion.

Non recursive (for loop):
```javascript
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}
```

Recursive:
```javascript
function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}
```

### Common Recursion Pitfalls
- missing or incorrect base case, resulting in infinite loop
- forgetting to `return` value for base case, resulting in infinite loop

### Helper Method Recursion
- an example of helper method recursion is a function that takes advantage of a recursive helper function.
- this can be helpful for more complex recursive functions

```javascript
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```

### Pure recursion

```javascript
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
```                                 
                                                                
                                                                             
                            
            