// 9/23/22
// Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// describe( "stringToNumber", function(){
//   it( "should work for the examples" , function(){
//     Test.assertEquals(stringToNumber("1234"),1234)
//     Test.assertEquals(stringToNumber("605"), 605)
//     Test.assertEquals(stringToNumber("1405"),1405)
//     Test.assertEquals(stringToNumber("-7"),  -7)
//   });
// });

const stringToNumber = function(str){
  return Number(str)
}

// 9/23/22
// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Smallest Integer Tests", () => {
//   let sif = new SmallestIntegerFinder();
//   it("Fixed Tests", () => {
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
//     assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
//   });
// })

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallest = args[0]
//     for(let i = 0; i < args.length; i++){
//       if(args[i] < smallest){
//         smallest = args[i]
//       }
//     }
//     return smallest
//   }
// }

// 9/23/22
// Sum of odd numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	return n**3
}

// 9-23-22
// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// describe("Tests", () => {
//   it("test", () => {
// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
//   });
// });

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle')
}

// 9/23/22
// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// 9/23/22
// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  return String(b)
}


// 9/23/22
// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  return h*3600000 + m*60000 + s*1000
}

// 9/23/22
// Odd or Even
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('Fixed tests', () => {
//   it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });
  
//   it('Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
//     assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
//   });
  
//   it('Negative Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
//   });
// });


function oddOrEven(array) {
  return array.reduce((acc,c) => acc + c, 0)%2 === 0 ? 'even' : 'odd'
}

// 9/23/22
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//   });
// });

var countSheep = function (num){
  let str = ''
  for(let i = 0; i < num; i++){
    str += `${i + 1} sheep...`
  }
  return str
}

// 9/23/22
// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
//     assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
//     assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
//   });
// });

function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArr = []
  l.forEach( x => {
    if(typeof(x) === 'number'){
      newArr.push(x)
    }
  });
  return newArr
}

// 9/23/22
// Sum without highest and lowest number
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// const {assert} = require("chai");

// it("example tests", ()=>{
//   assert.strictEqual( sumArray(null)                     , 0 );
//   assert.strictEqual( sumArray([ ])                      , 0 );
//   assert.strictEqual( sumArray([ 3 ])                    , 0 );
//   assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
//   assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
//   assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
//   assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
//   assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
// });

function sumArray(array) {
  if(array === null || array === undefined || array.length < 2){
    return 0
  }
  return array.reduce((acc,c)=> acc + c , 0) - Math.min(...array) - Math.max(...array)
}