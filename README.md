# data-structures-and-algorithms-401

# 1. Reverse an Array

Produce an array in reverse order.

## Challenge

Write a function called `reverseArray` which takes an array as an argument. Return an array in reverse order without using any built-in methods available to your language.

## Approach & Efficiency

I used a for loop starting from the end of the array and appending each item to an empty array, decreasing the position of i each time.

## Solution

![](./images/codechallenge-1.jpg)

---

# 2. Insert Shift Array

Insert number and shift array.

## Challenge

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

For this challenge, I defined the middle index, increased the length of the array by 1, shifted the values after the middle index one over, then added the input number as the middle index.

## Solution

![](./images/challenge-2.jpg)

---

# 3. Binary Search

Look for matching element in array.

## Challenge

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

I looped through the array and saw if each of the elements matched the key. If there was a match, the result previously declared is set equal to the element's index. If there were no matches, the result is set to -1.

## Solution

![](./images/challenge-3.jpg)

# 4. Linked List

Create link list that implements the folllowing:

- inserts nodes at the beginning of the list.
- checks to see if the list contains a value. (return true is exists, false if doesn't exist)
- prints values of the list.

# modules:

`node.js linked-list.js`

# 5. Linked List Insertions

Add to linked list module

## Challenge

Add to the linked list by creating methods called append (adds value to end of linked list), insertBefore(inserts value immediately before specified input value), and insertAfter (inserts value immediately after specified input value).

Jag, Jesse, Melissa, Becky, and I all worked together on this challenge. We looped through the node list for all of the methods and stop at the right place to insert the node. We then redirect the pointers to point to the correct node which puts them in the right order.

![](./images/challenge-5.jpg)
