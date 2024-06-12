"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// set is collection of unique values
//predefined constructor or class
// let arr : number[] = [1,2,3,4,5]
let arr = [1, 2, 3, 4, 5, 2, 3, 3, 3, 4, 5];
let set = new Set(arr);
console.log(set); //Set(5) { 1, 2, 3, 4, 5 }
// again Set(5) { 1, 2, 3, 4, 5 } //remove repeated values
//methods
//add
set.add(6);
set.add(7);
set.add(8);
set.add(8);
set.add(8);
console.log(set); //Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
//delete
set.delete(4);
console.log(set); //Set(7) { 1, 2, 3, 5, 6, 7, 8 }
//has
console.log(set.has(2)); //true
//for each
set.forEach((item) => {
    console.log(item);
}); /* 1
2
3
5
6
7
8 */
