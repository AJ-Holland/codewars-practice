// 10-2-22
// unique in order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//     });
//   });
  
// P 
// iterable string or array
//
// R 
// array of unique elements as per 
//
// E 
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
//
// P
// create a new array that will be the return value
// loop through string or arr
// conditional if index === index + 1
// else push to array
// return array
//  

var uniqueInOrder=function(iterable){
    let newArr = []
    if(iterable.length === 0){
        return newArr
    }
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i-1]){
            newArr.push(iterable[i-1])
        }
    }
    newArr.push(iterable[iterable.length-1])
    return newArr
  }