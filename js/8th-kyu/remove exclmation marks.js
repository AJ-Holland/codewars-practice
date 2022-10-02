// 10/2/22
// remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//   });
// });

function removeExclamationMarks(s) {
    while(s.indexOf('!') !== -1){
        s = s.replace('!','')
      }
      return s
  }