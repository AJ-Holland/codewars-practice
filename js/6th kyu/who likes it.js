// 10/1/22
// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('example tests', function() {
//   it('should return correct text', function() {
//     assert.strictEqual(likes([]), 'no one likes this');
//     assert.strictEqual(likes(['Peter']), 'Peter likes this');
//     assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });

// P 
// array of names (strings)
//
// R 
// a single string sentance with multiple variations
//
// E 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//
// P
// determine length of the array
// conditional depending on length
// have a string = each phrase depnding on length
// no one
// single person "likes this"
// "person" and "person" "like this"
// "person", "person" and 'person' like this
// 'person', 'person' and 'array length-2' others like this
// return string
//  

function likes(names) {
    let number = names.length -2
     if(names.length < 1){
        return 'no one likes this'
     } else if(names.length < 2){
        return names[0] + ' likes this'
     } else if(names.length < 3){
        return names[0] + ' and ' + names[1]+ ' like this'
     } else if(names.length < 4){
        return names[0] + ', ' +names[1] + ' and ' + names[2] + ' like this'
     } else {
        return names[0]+ ', ' + names[1] + ' and ' + number + ' others like this'
     }
  }