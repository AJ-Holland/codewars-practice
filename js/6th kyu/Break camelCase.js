// 9/29/223
// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// P 
// taking in a string of a single word
//
// R 
// a string with at least one space
//
// E 
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//
// P
// loop through word?
// check if there is an uppercase
// if uppercase, insert a space
//  return string

function solution(string) {
    if(str === ''){
        return ''
    }
    let str = string.split('')

    for(let i = 0; i < str.length )
}