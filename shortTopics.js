"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ternary operator
let myName = "Minahil";
let age = 20;
age == 20 && myName == "Minahil" ? console.log('ture') : console.log(false);
//literal types
//"literal type" is a specific value that a variable can have. 
//Instead of just saying a variable is a string or a number
let literalType;
literalType = "minahil";
//enums
//  Enums is a way to define a set of named values. 
//Enums allow you to create a collection of related values that can be used as constants in your code.
//It return index
//syntax: enum name {}
var Person;
(function (Person) {
    Person[Person["minahil"] = 0] = "minahil";
    Person[Person["wanya"] = 1] = "wanya";
    Person[Person["wasea"] = 2] = "wasea";
    Person[Person["hateem"] = 3] = "hateem";
})(Person || (Person = {}));
const person = Person.minahil;
console.log(person); // 0
const P1 = Person[0];
console.log(P1); //minahil
//it also define index
var Data;
(function (Data) {
    Data[Data["h"] = 10] = "h";
    Data[Data["i"] = 11] = "i";
    Data[Data["j"] = 12] = "j";
})(Data || (Data = {}));
const defineIndex = Data.j;
console.log(defineIndex); //12
//Join Method
// It creates a string by concatenating all the elements of the array, separated by a specified separator.
let fruits = ["Apple", "Banana", "Cherry"];
// let joinMethod = fruits.join() // // Apple,Banana,Cherry
// let joinMethod = fruits.join(" and ") // Apple and Banana and Cherry
let joinMethod = fruits.join("-"); //Apple-Banana-Cherry
console.log(joinMethod);
//concat Method
//combines two or more arrays into one new array without changing the original arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); //[4,5,6] doesnt change
