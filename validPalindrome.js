// https://leetcode.com/problems/valid-palindrome/submissions/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

//remove special characters w/ regexp

 var isPalindrome = function(s) {
    //change case 
    // split, reverse join
    // compare return boolean
    var re = /[^A-Za-z0-9]/g
    const palindrome = s.toLowerCase().replace(re, "").split("").reverse().join("")
 
    
    console.log(palindrome, s.toLowerCase().replace(re, ""))
    
    return palindrome === s.toLowerCase().replace(re, "")
};