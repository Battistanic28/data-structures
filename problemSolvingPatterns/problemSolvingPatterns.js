/*
========================
Frequency Counters
========================

Anagram Challenge:
"Given 2 strings, write a function to determin if the second string is an anagrasm of the first"

Clarifying questions:
- "Can I assume the strings will always be lower case?"
- "Do I need to account for numbers or spaces?"

Expect:
validAnagram('pizza', 'star'); // false
validAnagram('cinema', 'iceman'); // true
*/


const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    };

    const obj1 = {};
    const obj2 = {};

    for (let val of str1) {
        if (!obj1[val]) {
            obj1[val] = 0
        }
        obj1[val] ++;
    };

    for (let val of str2) {
        if (!obj2[val]) {
            obj2[val] = 0
        }
        obj2[val] ++;
    };

    for (key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// console.log(validAnagram('pizza', 'poppa'));

/*
========================
Multiple Pointers
========================

Count unique values challenge:
"write a function called countUniqueValues(), which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted."

Expect:
countUniqueValues([-3,-3,1,2,2]); // 3
countUniqueValues([-3,1,2]); // 3
countUniqueValues([]); // 0
*/

function countUniqueValues(array) {
    if(array.length === 0) return 0;
    let count = 1;
    let pointer1 = 0;
    let pointer2 = 1

    while(pointer2 <= array.length -1) {
        if (array[pointer2] === array[pointer1]) {
            pointer2 ++;
        } else if (array[pointer2] > array[pointer1]) {
            pointer1 = pointer2
            pointer2 ++;
            count ++
        }
    }

    return count;
}

// console.log(countUniqueValues([-3,-3,1,2,2,2,2,2,2,4,10,16,16]))