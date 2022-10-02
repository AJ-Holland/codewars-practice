// 10-2-22
// convert a number to a string

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(numberToString(67), '67');
//   });
// });

function numberToString(num) {
    return num + ''
  }

//   or  return num.toString();