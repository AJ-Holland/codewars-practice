// All the codewars practice
//really need to find a better way to organize this

//9/3/2022
// function typeValidation(variable, type) {
//   // Your code should be here ;) 
//   if(typeof(variable)===type){
//     return(true)
//   }
//   else{
//     return(false)
//   }
// }
// describe("Basic Tests", function() {
//   Test.assertEquals(typeValidation(42, "number"), true);
//   Test.assertEquals(typeValidation("42", "number"), false);
// });

//9/4/2022
// 8kyu - fundamental

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//Solution
// function factorOfBase(base, factor )
// {
//   if(base%factor === 0){
//     return(true)
//   }
//   return(false)
// }

// factorOfBase()


// 9/5/22
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// const { assert } = require("chai")
// //test
// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });

  //////
//   Solution
// function boolToWord( bool ){
//   if(bool == true){
//     return 'Yes'
//   }
//   else{
//     return 'No'
//   }
// }

// 9/5/22

// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//     assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//     assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//     });
//   })

// Solution
//the '/T/g' changes it globally
// function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
//   return(dna.replace(/T/g,'U'))
// }

// 9/5/22
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// solution
// var summation = function (num) {
//   // Code here
//   let sum = 0
//   for (let i = num; i !==0 ; i--){
//     sum += i
//   }
// }

// describe('summation', function () {
//   it('should return the correct total', function () {
//     Test.assertEquals(summation(1), 1)
//     Test.assertEquals(summation(8), 36)
//   })
// })

// 9/5/22
// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// const chai = require('chai');
// const assert = chai.assert;

// describe("Example Tests", function() {
//   it("betterThanAverage([2, 3], 5) should return True", function() {
//     assert.strictEqual(betterThanAverage([2, 3], 5), true);
//   });
  
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
  
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
  
//   it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
//     assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
//   });
  
//   it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
//     assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
//   });
// });


// 9/5/22

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// const chai = require('chai');
// const assert = chai.assert;

// describe("Example Tests", function() {
//   it("betterThanAverage([2, 3], 5) should return True", function() {
//     assert.strictEqual(betterThanAverage([2, 3], 5), true);
//   });
  
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
  
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
  
//   it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
//     assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
//   });
  
//   it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
//     assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
//   });
// });

// solution
// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
  // mine
//   let total = 0
//   classPoints.forEach( indexValue => total += indexValue )
//   let avg = total/classPoints.length
  
//   if(yourPoints > avg){
//     return true
//   } 
//   return false

// }

// top
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }


// 9/6/22
// Solution
// var min = function(list){
//   let sorted = list.sort((a,b) => a-b)
//   return list[0];
// }

// var max = function(list){
//   let sorted = list.sort((a,b) => b-a)
//   return list[0];
// }

//most popular
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// describe("Test", function(){
//   it("Examples", function(){
//     Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
//     Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
//     Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
//     Test.assertEquals(max([5]), 5);
//   });
// });

// 9/6/22
// Complete the solution so that it reverses the string passed into it.

// Solution
// function solution(str){
//   let newStr = ""
//   for(let i = str.length-1; i >= 0; i--){
//       newStr += str[i]
//   }
//   return(newStr)  
// }

// Most popular
// function solution(str){
//   return str.split('').reverse().join('');  
// }

// Tests
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');
//   });
// }); 


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash (words) {
//     let displayText = ""
//     if(words[0] == null){
//         //if blank, return blank
//         return displayText
//     }
//     for(let i =0; i < words.length; i++){
//         displayText += words[i] + " "
//         if(i == words.length-1){
//             displayText = displayText.slice(0,-1)
//         }
//     }
//     return displayText

//     return words.join()
//  };

//  Opposites Attract
//  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//     // moment of truth
//     return(flower1%2 !== flower2%2)
//   }



// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//     //code here
//     //reverse number
//     //break number into array
    
//     let arr = String(n).split("").reverse().map(x => Number(x))
//     return arr

//     // return String(n).split('').map(Number).reverse()
//   }

// Beginner Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// function paperwork(n, m) {
//   return n < 0 ||m < 0 ? 0 : n*m
// }

// Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//     // Add code here
//     return name === owner ? "Hello boss" : "Hello guest"
//   }

// 9/17/22
// Find the first non-consecutive Number

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it('a simple example', function() {
//     const first = firstNonConsecutive([1,2,3,4,6,7,8])
//     assert.strictEqual(first, 6)
//   })
// })

// function firstNonConsecutive (arr) {
//   for(let i = 0; i < arr.length-1; i++){
//     if(arr[i] + 1 !== arr[i+1]){
//       return arr[i+1]
//     }
//   }
//   return null
// }

// 9/17/22
// Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// EX
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// function openOrSenior(data){
//   for(let i = 0; i < data.length;i++){
//     if(data[i][0] < 55 || data[i][1] <= 7){
//       return 'Open'
//     }else{
//       return 'Senior'
//     }
//   }
// }