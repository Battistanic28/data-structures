// Linear search
function linearSearch(arr, value) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1;
}

// console.log(linearSearch([1,2,3,4,5], 1))

// Binary search
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
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 5))


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

// console.log(stringSearch('colorado', 'color'))
