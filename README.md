# sorting-algorithms

Implement Five Different Sorting Algorithms [bubble sort • quick sort • merge sort • insertion sort • selection sort]

# Bubble Sort

Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. [Wiki](https://en.wikipedia.org/wiki/Bubble_sort)

- O(n2) worst case performance
- O(n2) average performance

# Quick Sort

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting. [Wiki](https://en.wikipedia.org/wiki/Quicksort)

- O(n2) worst case performance
- O(n log n)avergage performance

# Merge Sort

Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945. [Wiki](https://en.wikipedia.org/wiki/Merge_sort) Conceptually, a merge sort works as follows:

1 Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
2 Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

- O(n log n) worst case / avg performance

# Insertion Sort

Simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. [Wiki](https://en.wikipedia.org/wiki/Insertion_sort)

- O(n2) worst case

# Selection Sort

Divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. [Wiki](https://en.wikipedia.org/wiki/Selection_sort)

- O(n2) worst case
