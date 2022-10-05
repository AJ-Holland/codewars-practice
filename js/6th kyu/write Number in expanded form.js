// 10/3/22
// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(expandedForm(12), '10 + 2');
//   Test.assertEquals(expandedForm(42), '40 + 2');
//   Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
//     });
//   });

// P 
// a whole number greater than 0
//
// R 
// string of expanded numbers
// num + num + num
//
// E 
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
//
// P
// set blank string
// loop until num % 10 === 0
// conditional for % 10 === 0
// skip it
    // else
    // mod 10 to get last digit
    // have a counter starting at 1 and *10 for every loop
    // multipy the two to get digit to add to string
    // add the product to the start of the string
// divide by 10 to get to next digit
//  

function expandedForm(num) {
    let str = ''
    let mult = 1
    while(num > 0){
        if(num % 10 !== 0){
            if(str === ''){
                str = (num % 10) * mult
            }else{
                str = (num % 10) * mult + ' + ' + str 
            }
        }
        mult = mult * 10
        num = Math.floor(num / 10)
    }
    return str + ''
}