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