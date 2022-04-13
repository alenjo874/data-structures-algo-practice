// https://leetcode.com/problems/contains-duplicate/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
    //create new empty array
    //if number is inside result, return true
    //else push in nums[i]
    //if for loop completes, return false

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result.includes(nums[i])) {
      return true;
    } else {
      result.push(nums[i]);
    }
  }

  return false;
};

//Time: O(n)
//Space: O(n)
//We can also use brute force to iterate over every element and compare each one with time complexity O(n^2) and space O(1)
//We can also sort the array, create pointers, and compare each number next to each other, shifting the pointer for the next pair time (n logn) and space O(1)