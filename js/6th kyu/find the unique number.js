// 9/28/22
// find the unique Number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// P 
// takes in an array of numbers
//
// R 
// the number that is unique
//
// E 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
// P
// loop through array
// for each? for?
// determine if index is the last time it shows up
// conditional if yes - return that number
// else continue
//  


function findUniq(arr) {
    // why doesn't this work??
    // arr.forEach((x)=> {
    //     if(arr.indexOf(x) === arr.lastIndexOf(x)){
    //         return x
    //     }
    // })

    for( let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
}