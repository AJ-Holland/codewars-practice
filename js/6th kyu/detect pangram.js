// 10/1/22
// detect pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });


// P 
// string sentence
//
// R 
// true or false
// true if it is a pangram
// false if it is not
//
// E 
// isPangram("This is not a pangram."), false
// isPangram("The quick brown fox jumps over the lazy dog."), true
//
// P
// get letters array
// loop through letters
// check to see if string includes letters
// break if not
//  

function isPangram(string){
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < letters.length; i++){
        if(!string.includes(letters[i])){
            return letters[i]
        }
    }
    return true
  }