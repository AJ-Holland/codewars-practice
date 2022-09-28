// 9/27/22
// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"),"(((");
//     assert.strictEqual(duplicateEncode("recede"),"()()()");
//     assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//     assert.strictEqual(duplicateEncode("(( @"),"))((");
//   });
// });


// P 
// string of any characters
//
// R 
// a string of '(' or ')'
//
// E 
// duplicateEncode("din"),"(((")
// duplicateEncode("recede"),"()()()")
// duplicateEncode("(( @"),"))((")
//
// P
// create a hash map
// loop through string
// add to hash map if character is used
// 
// loop through string again
// conditional
// if char in hashmap is used multiple times = ')'
// else char = '('
// 

// OR

// create result array
// create test word that is word to lower case and splits into array
// loop through string
// check if lastIndexOf === index or if indexOf === index if it happens to be the last character
// push ')'
// else
// push '('
// return join result 
//


function duplicateEncode(word){
    let result = []
    let testWord = word.toLowerCase().split('')
    testWord.forEach( (x,i) => {
        if(testWord.lastIndexOf(x) !== i || testWord.indexOf(x) !== i ){
            result.push(')')
        }
        else{
            result.push('(')
        }
    })
    return result.join('')
}