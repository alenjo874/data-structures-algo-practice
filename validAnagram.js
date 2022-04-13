// https://leetcode.com/problems/valid-an
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  //base case, if s + t length dont eq, return false
  //iterate over strings, to create obj
  //key = letter ; value = count
  //compare both obj to see if key/value equals

  if (s.length !== t.length) {
    return false;
  }

  const hashS = {};
  const hashT = {};

  for (let i = 0; i < s.length; i++) {
    if (hashS[s[i]]) {
      ++hashS[s[i]];
    } else {
      hashS[s[i]] = 1;
    }

    if (hashT[t[i]]) {
      ++hashT[t[i]];
    } else {
      hashT[t[i]] = 1;
    }
  }

  for (const key in hashS) {
    if (hashS[key] !== hashT[key]) {
      return false;
    }
  }

  return true;
};
