"use strict";
//MAP method
// It creates a new array by applying a function to each element of an existing array.
// It does not change the original array. and takes 3 parameter or less
Object.defineProperty(exports, "__esModule", { value: true });
//syntax 
// .map(()=>{})
// EXAMPLE
let arr1 = [1, 2, 3];
let newArr = arr1.map((num) => {
    return num * 2;
});
console.log(newArr); // [2,4,6]
//its 3 parameters
// currentValue takes each element of the array (1, 2, 3, 4).
// index takes the position of each element (0, 1, 2, 3).
// array refers to the original array ([1, 2, 3, 4]).
const array = [1, 2, 3, 4];
const result = array.map((currentValue, index, array) => {
    console.log(`Value: ${currentValue}, Index: ${index}, Array: ${array}`);
    return currentValue * 2;
});
console.log(result); // Output: [2, 4, 6, 8]
