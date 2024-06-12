"use strict";
//filter()
//It is used to create a new array with all elements that pass a test implemented by a provided function.
//it doesnot change original array
//it takes three parametres
// 1st parameter Current Element: The current element being processed in the array.
// 2nd parameter Index: The index of the current element being processed
// 3rd paramter Array: The array on which the filter method was called.
Object.defineProperty(exports, "__esModule", { value: true });
//syntax
// .filter(()=>{})
//  let arr : number[] = [1,2,3,4,5]
//  let newArr = arr.filter((Number,i,refArr)=>{
//     console.log(i); // 0 1 2 3 4
//     console.log(refArr);
//     return Number == 4
//  })
//  console.log(arr);//[ 1, 2, 3, 4, 5 ]
//  console.log(newArr); //[4]
//example
let people = [
    { name: "minahil", age: 20 },
    { name: "usman", age: 20 },
    { name: "wanya", age: 18 },
];
let newPeople = people.filter((elem) => {
    return elem.age === 20;
});
console.log(newPeople);
