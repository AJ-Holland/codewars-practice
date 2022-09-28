// 9/26/22
// Are they the "same"?
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

// describe("Tests", () => {
//     it("test", () => {
//   a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//   a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//   Test.assertEquals(comp(a1, a2), true);
//     });
//   });

// P 
// two arrays of numbers
//
// R 
// True or False
// true if the arrays have the same elements and multiplicity
// false otherwise
//
// E 
//   a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//   a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//   comp(a1, a2), true;
//
// P
//  check if arrays are empty
//  loop through b
//  check if square root element exists in a
//  if not return false
//  else remove element / index from a
//  
//  if a is empty return true
//  
//  
//  

// array1.forEach( (x,i) => {
//     if(x === '' || array2.indexOf(x*x) === -1){
//         return false
//     } else{
//         array2.splice(array2.indexOf(x*x),1)
//     }

// })
// // array2.forEach( (x,i) => {
// //     if(x === ''){
// //         return false
// //     }
// //     if(array1.indexOf(Math.sqrt(x)) === -1){
// //         return false
// //     }else{
// //         array1.splice(i,1)
// //     }
// // })


function comp(array1, array2){
    if(array1 === null || array2 === null){
        return false
    }
    return array1.map(x => x*x).sort().join('') === array2.sort().join('')
  }


  // works
  function comp(array1, array2){
    if(array1 === null|| array2 === null){
        return false
    }
    array1.forEach( (x,i) => {
      if(x === '' || array2.indexOf(x*x) === -1){
          return false
      } else{
          array2.splice(array2.indexOf(x*x),1)
      }      
    })
    if(array2.length < 1)
    {
      return true
    }
    return false
}