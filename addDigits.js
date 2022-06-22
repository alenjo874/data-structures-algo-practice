// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

var addDigits = function(num) {
    
    if(num < 10) {
        console.log(num)
        return num
    }
    
    const stringNum = num.toString()
    let addedNum = 0
    
    for(let i = 0; i < stringNum.length; i++){
        addedNum += parseInt(stringNum[i])
    }


    return addDigits(addedNum)
    
};