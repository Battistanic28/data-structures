# Basic Sorting Algorithms

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

---
# Bubble Sort
- A sorting algorithm where the largest values "buble" to the top.
- Bubble sort is not very effiectient and not commonly implemented.
- Works by looping through the data set and comparing each value to the value that follows it. If the first value is larger, we swap their positions and continue.
- We could repeat iterations for every element in array, but we can decrease the length of the array each time because we know the next largest value will bubble up to the end on each iteration.

### Pseudocode
- Start looping with a variable called i from end of array towards beginning
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
There is an issue with the naive solution. The inner loop iterates over the full array on each pass. We know this is unneccesary. Since the largest values are bubling to the top with each pass. Beacause of this, we can safely subtract 1 from the array length each time.

```javascript
// Better solution
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i-1; j++) {
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
This solution is better because by iterating from the end of the array towards the beginning, we effectively ignore any sorted values that have bubbled to the end of the array and are already sorted.

### Optimizing Bubble Sort

There is still a problem with both solutions above. If we are sorting a "nearly sorted" array htat only takes a handful of iterations to sort, the algorithm still completes the max number of iterations. We can short circuite this. If we completed a full pass without making any swaps, we know that there will be no swaps made on future passes. Thus we can assume sorting is complete and return the result.

```javascript
// Optimized solution
function bubbleSort(arr) {
    var noSwaps;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]));
```

Adding the 'noSwaps' variable is a small change that can dramatically improve the performance of our algorithm in the event of a nearly sorted array. This can make a huge difference at scale.

### BigO

In general, it's O(n^2). This is because we have a nested loop and we are roughly making a comparison for each item in the array. However, if the data is nearly sorted, the complexity is more like linear time. 

---
# Selection Sort

Similar to Bubble Sort, but instead of first placing large values into a sorted position, it places small values into sorted position.

### Pseudocode
- store the first element as the smallest value we've encountered.
- compare this item to the next item in the aray until you find a smaller number
- if a smaller number is found, designate the new minimum and continue until the end of array
- if the minimum is not the value (index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted

```javascript
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        // SWAP
        if (i !== smallest) { // <-- optimize
            var temp = arr[i];
            arr[i] = arr[smallest]
            arr[smallest] = temp
        }
    }

    return arr;
}

selectionSort([5,3,9,2,10,1,7,4,6])
```

### BigO

- O(n^2)
- not terribly efficient

---
# Insertion Sort

- Similar to both selection sort and bubble sort.
- builds up the sort by gradually creating a larger left portion of the array that is always sorted.

### Pseudocode

- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion (left side) to place the element in the correct place
- repeat until array is sorted

```javascript
function insertionSort(arr) {
    for (i=1; i<arr.length; i++) {
        var currentVal = arr[i];
        for (var j=i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }

    return arr;
}

insertionSort([2,1,9,76,4])
```

### BigO
- O(n^2)
- time complexity is similar to selection and bubble sort
- however, there is some advantage in the case where the array is almost sorted
- inverted sort (i.e. [4,3,2,1]) is the worst case scenario for insertion sort
- insertion sort is a good option where data is coming in live or streaming
