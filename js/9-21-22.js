// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
//   })
// })

//regEx isn't good code I don't like it, clever it may be, but dumb
function DNAStrand(dna){
    let pairs = {A:'T',T:'A',C:'G',G:'C'};
    return dna.replace(/./g, e => pairs[e])
}


function DNAStrand(dna){
    let arr = dna.split("")
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === "A"){
            arr[i] = "T"
        }else if(arr[i] === "T"){
            arr[i] = "A"
        }else if(arr[i] === "C"){
            arr[i] = "G"
        }else if(arr[i] === "G"){
            arr[i] = "C"
        }
    }
    let newArr = arr.join('')
    return newArr
}

// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//     assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//   })
// })

function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }