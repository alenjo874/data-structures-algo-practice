// https://leetcode.com/problems/squares-of-a-sorted-array/
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    
    const result = []   
   
   for(let i = 0; i < nums.length; i++ ) {
       result.push(nums[i]**2) 
   }
   
   for(let x = 1; x < result.length; x++) {
       let current = result[x];
       let j = x - 1
       while(j >= 0 && result[j] > current) {
           result[j + 1] = result[j];
           j--;
       }
       result[j+1] = current;
   }
   
   return result
};