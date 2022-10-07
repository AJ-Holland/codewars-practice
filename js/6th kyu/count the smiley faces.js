// 10-4-22
// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// describe("Basic testing", function() {
//     it("", () => {
//       Test.assertEquals(countSmileys([]), 0);
//       Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
//       Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
//       Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
//     });
//   });

// P 
// array of strings of set characters
//
// R 
// number of smiley faces
//
// E 
// countSmileys([]), 0
// countSmileys([':D',':~)',';~D',':)']), 4
// countSmileys([':)',':(',':D',':O',':;']), 2
// countSmileys([';]', ':[', ';*', ':$', ';-D']), 1
//
// P
// count variable
// loop through the array
// condition check for if the string contains either ')' or 'D'
// increment the count
// return the count
// 

function countSmileys(arr) {
    let count = 0
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr = arr[i].split('')

        if(newArr.length === 2){
            if(newArr.includes(':') && newArr.includes(')') || newArr.includes(':') && newArr.includes(')')|| newArr. includes('D')){

            }
        }

        // if(newArr.includes(')') || newArr. includes('D')){
        //     count++
        // }
    }
    return count
}