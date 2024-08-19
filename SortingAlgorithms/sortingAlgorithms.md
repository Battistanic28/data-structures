# Sorting Algorithms

## Objectives
- Implement Bubble Sort
- Implement Selection sort
- Implement Insertion Sort
- Understand why it's important to know these more basic sorting algorithms

### What is a sorting algorithm?
- Sorting is the process of rearranging items in a collectioon (e.g. array), so that they are in some kind of order.

### Why are they important?
- Sorting is an incredibly conmmon task
- There are many ways to sort things, and different tecniques have their own advantages and disadvantages.
- This is a very common interview topic

### Javascript built in sort method
- Doesn't always work as expected.
- Strings sort alphabetically
- All values are converted to unicode, then sorted. This does not work for numbers!
- .sort() accepts a function as a param that allows us to define the sort method.

### Bubble Sort
- A sorting algorithm where the largest values "buble" to the top.
- Bubble sort is not very effiectient and not commonly implemented.
- Works by looping through the data set and comparing each value to the value that follows it. If the first value is larger, we swap their positions and continue.
- We could repeat iterations for every element in array, but we can decrease the length of the array each time because we know the next largest value will bubble up to the end on each iteration.

### Pseudocode
- Start looping with a variable called i from beginning towards end
- Start an inner loop with a variable called j, looping from the beginning until i-1
- If arr[j] is greater than arr[i+1], swap the two values

```javascript
// Naive solution
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; i < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([37,45,29,8]));
```