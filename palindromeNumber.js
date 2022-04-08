// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.

var isPalindrome = function (x) {
  // all negative will be false
  //stringify x
  //split x
  // reverse x
  // join and compare

  if (x < 0) {
    return false;
  }

  const palindrome = x.toString().split("").reverse().join("");

  if (parseInt(palindrome) === x) {
    return true;
  } else {
    return false;
  }
};
