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
