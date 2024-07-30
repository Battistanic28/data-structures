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