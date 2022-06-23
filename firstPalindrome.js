//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/submissions/

// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

var firstPalindrome = function(words) {
   
    for(let i = 0; i < words.length; i++){
         let word = words[i]
         let right = 0
         let left = word.length - 1 
         
         if(word.length === 1) {
             return word
         }
         
         while(right < left){
             if(word[right] === word[left]) {
                 right++
                 left--
             } else if(word[right] !== word[left]) {
                 break
             }
         
         }
           return word || ""
    }
    return ""
};