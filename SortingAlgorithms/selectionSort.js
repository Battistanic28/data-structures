/*
PSUEDOCODE:
- store the first element as the smallest value we've encountered.
- compare this item to the next item in the aray until you find a smaller number
- if a smaller number is found, designate the new minimum and continue until the end of array
- if the minimum is not the value (index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted
*/
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

console.log(selectionSort([5,3,9,2,10,1,7,4,6]))