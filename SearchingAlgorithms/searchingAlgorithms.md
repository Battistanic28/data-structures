# Searching Algorithms

## Objectives
- describe what a searching algorithm is
- implement linear search on arrays
- implement binary search on sorted arrays
- implement a naive string searching algorithm
- implement the KPM string searching algorithm

## Linear Search
Javascript has many examples of linear search build in,
- indexOf()
- includes()
- find()
- findIndex()

In a linear search, we check every individual element in an array for a match. If a match is found return something (i.e. index else -1, etc).

### BigO
Linear search BigO
- best case: O(1)
- average: O(n)
- worst case: O(n)

**Psuedocode:**
- function accepts array and value
- loop through array and check if current array element is equal to value
- if match found, return index of element
- else return -1

```javascript
// Linear search - O(n) complexity
function linearSearch(arr, value) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5], 1)) // 0
```
<hr>
<hr>

## Binary Search
- binary search is a much faster form of search
- rather than eliminating one element at a time, you can eliminate _half_ of the remaining elements at a time
- CAVEAT: binary search only works on sorted arrays!

**How does this work?**
- divide and conquer
- find the middle of the provided _sorted_ array (arr.length / 2).
- does the search value come before or after the index of the half way value? Alphabetically/numerically?
- if greater, search segment between half way and end
- if less, search segment between start and half way
- Repeat until match is found!

### BigO
Binary search BigO
- best case: O(1)
- average: O(log n)
- worst case: O(log n)

**Psuedocode:**
- function accepts a sorted array and value
- create a left pointer (start of array)
- create right pointer (end of array)
- find middle point
- loop while left pointer comes before right pointer
    - if match is found, return index
    - if value too small, move left pointer up
    - if value too large, move right pointer down

```javascript
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== value) {
        if(arr[middle] === value) return middle;
        if(value < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    
    return middle
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 5)) // 4
```

There is a big problem witht the example above. What if the value is not found in the array? We do not handle that scenario. This would result in an infinite loop. Here's a more robust solution,

```javascript
// Binary Search - O(log n) complexity
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== value && (start <= end)) {
        if(arr[middle] === value) return middle;
        if(value < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    
    return arr[middle] === value ? middle : -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 10))
```

<hr>
<hr>

## String Search
 - define a function that counts the number of occurances of a substring within a provided string.

 **Psuedocode:**
 - loop over the longer string
 - loop over the shorter string
 - if characters don't match, break inner loop
 - if characters don't match continue
 - if you complete inner loop and find a match, increment a counter
 - return the counter value

 ```javascript
 // Naive String Search
function stringSearch(string, substring) {
    let counter = 0;
    for(let i = 0; i < string.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (substring[j] !== string[i+j]) break;
            if (j === substring.length-1) {
                counter ++;
            }
        }
    }
    return counter;
} 

console.log(stringSearch('colorado', 'color')) // 1
```