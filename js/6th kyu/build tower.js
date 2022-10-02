// 10/2/22
// build tower

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// P 
// number of flowers
//
// R 
// array of strings with atsricks inside that depend on the floor count, increase in odd increments
//
// E 
// towerBuilder(1), ["*"]
// towerBuilder(2), [" * ","***"]
// towerBuilder(3), ["  *  "," *** ","*****"]
//
// P
// know the max length of every line given the floor number (max floor * 2 - 1 ?)
// create a blank array
// create a blank string
// create a atrick string
// loop from 0 to floor number - 1
// blank space repeated, astrick repeated, blank space repeated again
// 

function towerBuilder(nFloors) {
    let arr = []
    let blank = ' '
    let astrick = '*'
    for(let i = 0; i < nFloors; i++){
        arr.push(blank.repeat(nFloors-i-1) + astrick.repeat((i+1)*2-1) + blank.repeat(nFloors-i-1))
    }
    return arr
  }