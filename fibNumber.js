// https://leetcode.com/problems/fibonacci-number/
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    n = fib(n - 1) + fib(n - 2);
    return n;
  }
};
