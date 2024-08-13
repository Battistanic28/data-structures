# Problem Solving Patterns

## Some common patterns in coding problems

### Frequency Counters
- a pattern that uses objects to collect values/frequency of values 

Ex.

"Write a function called same(), which accepts two arays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same."

- ```same([1,2,3], [4,1,9]) // true```
- ```same([1,2,3], [1,9]) // false```
- ```same([1,2,1], [4,4,1]) // false (must be same frequency)```

```javascript
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){ // a naive approach could have used nested for loops - much slower than multiple single loops
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){ // seasrching by a key in an object is extremely fast
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
```

### Multiple Pointers
- a pattern that relies on creating pointers or values that correspond to an index/position and move towards beginning/middle/end based on certain condition. Can be very efficient for solving problems with minimal space complexity.

Ex.

"write a function called sumZero() which accepts a sorted array of integers. The function should find the first pair where sum is 0. Return an array that includes both values that sum to 0 or undefined if a pair does not exist. The fact that this is a sorted array is critical context!."
- ```sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]```
- ```sumZero([1,2,3]); // undefined```

Solution:
```javascript
// time complexity = O(n)
// space complexity = O(1)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
```

### The Sliding Window
- a pattern that involves creating a window whcih can either be an array or number from position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). This pattern is very useful for keeping track of a subset of data in an array/string etc. 

Ex.

"write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array."
- ```maxSubarraySum([1,2,3], 3); // 6```
- ```maxSubarraySum([1,2,3], 1); // 3```
- ```maxSubarraySum([2,6,9,2,1,8,5,6,3],3); // 19```


Solution:
```javascript
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

### Divide and Conquer
- this pattern involves dividing a data set into smaller chunks and then repeatinga process with a subset of data. This pattern can tremendously decrease time complexity.

Ex.

"given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1."
- ```search([1,2,3,4,5,6], 4); // 3```
- ```search([1,2,3,4,5,6], 6); // 5```
- ```search([1,2,3,4,5,6], 11); // -1```
