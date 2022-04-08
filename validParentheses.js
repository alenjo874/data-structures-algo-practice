// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  // bracket closed by same bracket type ({[]})
  // use stack data structure
  // push if opening
  // else close, check top of stack and remove
  // return boolean based on length

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
