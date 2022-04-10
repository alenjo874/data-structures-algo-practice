//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

var removeDuplicates = function (nums) {
  // Check if the current and the next element are equal.
  // If they are, we will skip the next element and will continue the procedure as long as we encounter the duplicates.
  // If the elements are not duplicate, we will place the next (different) element next to the current element.
  // Length of the updated array
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};
