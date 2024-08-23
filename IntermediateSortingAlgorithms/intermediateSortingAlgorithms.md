# Intermediate Sorting Algorithms

## Objectives
- understand limitations of the more basic sorting algorithms
- implement merge sort
- implement quick sort
- implement radix sort

The basic sorting algorithms worked. Why are more complicated methods important?
- the more basic sorting algorithms we discussed do not scale well
- these sorting algorithms can improve time complexity from O(n^2) to O(n log n)

---
# Merge Sort
- merge sort takes advantage of the fct that arrays of 0 or 1 element are already sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
- when merging arrays, at least in the case of merge sort, we can assume we are merging to sorted arrays.

### Pseudocode
- create an empty array, take a look at the smallest values in each input array
- while there are still values we haven't looked at...
    - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to next value in first array.
    - if the value ins the first array is larger than the value in the second array, push the value in the second array into our results and move on to next value in the second array.

    ```javascript
    function merge(arr1, arr2) {
        let results = [];
        let i = 0;
        let j = 0;

        while(i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]) {
                results.push(arr1[i])
                i++
            } else {
                results.push(arr2[j])
                j++
            };
        };

        while(i < arr1.length){
            results.push(arr1[i])
            i++
        };
        while(j < arr1.length){
            results.push(arr2[j])
            j++
        };

        return results;
    }

    console.log(merge([1,10,50],[2,14,99,100]))
    ```