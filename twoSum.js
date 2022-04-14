// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// ================================
// BRUTE FORCE O(n^2)
var twoSum = function (nums, target) {
  //iterate over nums array
  //hold first nums[i]
  //add each next value
  //if === target, exit
  //if not move onto next nums[++i]
  //return -1 if nothing there

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result.slice(0, 2);
};
// ================================
//O(n) time and space
var twoSum = function (nums, target) {
  //iterate overs array, create hashmap
  //if diff equals target return indexes
  //else create new key/value

  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in hashMap) {
      return [hashMap[diff], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};
