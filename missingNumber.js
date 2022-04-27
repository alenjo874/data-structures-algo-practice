// https://leetcode.com/problems/missing-number/
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
    //this method uses a formula 
  const sum = (nums.length * (nums.length + 1)) / 2;
  let numsSum = 0;

  for (let i = 0; i < nums.length; i++) {
    numsSum += nums[i];
  }

  return sum - numsSum;
};
