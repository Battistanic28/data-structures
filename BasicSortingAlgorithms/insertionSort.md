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