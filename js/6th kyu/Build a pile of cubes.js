// 9/26/22
// build a pile of cubes
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// describe("Basic tests",function() {

//     Test.assertEquals(findNb(4183059834009), 2022)
//     Test.assertEquals(findNb(24723578342962), -1)
//     Test.assertEquals(findNb(135440716410000), 4824)
//     Test.assertEquals(findNb(40539911473216), 3568)
//     })

// P 
// m as the total volume of the building
//
// R 
// Answer as int such that the n^3 + (n-1)^3 + ... + 1^3 adds to m
// or -1 if no such int exists
//
// E 
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
//
// P
// int total
// int interations
// while total < m keep going?
// total adds iteration**3 each iteration
// iteration + 1
// conditional total = m
// return iteration? // fix iteration that is returned
// conditional total > m
// return -1
// 

function findNb(m) {
    let total = 0
    let iterations = 0
    while(total < m){
        iterations += 1
        total += iterations**3
    }
    if(total === m){
        return iterations
    }else{
        return (-1)
    }
}