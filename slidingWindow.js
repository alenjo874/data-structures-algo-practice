// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  //two pointers left=buy right=sell
  //slide right pointer
  //if price at right index is greater than left, push into array
  //always move right pointer
  //if left is greater than right, move pointer to right
  let left = 0;
  let right = 1;
  const profit = [];

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit.push(prices[right] - prices[left]);
    } else {
      left = right;
    }
    right += 1;
  }

  if (profit.length < 1) {
    return 0;
  }

  return Math.max(...profit);
};
