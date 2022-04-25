//Given an array of integers nums, sort the array in ascending order.
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
};
