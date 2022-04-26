// https://leetcode.com/problems/maximum-subarray/
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.


//BRUTE FORCE
var maxSubArray = function (nums) {
  // iterate through arr at i, and iterate add each j
  // add to result arr
  // get the max

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      result.push(sum);
    }
  }

  return Math.max(...result);
};
