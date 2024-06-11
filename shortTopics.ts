//ternary operator
let myName:string="Minahil"
let age:number=20
age == 20 && myName == "Minahil" ? console.log('ture') : console.log(false);

//literal types
//"literal type" is a specific value that a variable can have. 
//Instead of just saying a variable is a string or a number

let literalType : "minahil"|20
literalType = "minahil"

//enums
//  Enums is a way to define a set of named values. 
//Enums allow you to create a collection of related values that can be used as constants in your code.
//It return index
//syntax: enum name {}

enum Person {
    minahil,wanya,wasea,hateem
}
const person:Person=Person.minahil
console.log(person); // 0
const P1:string=Person[0] 
console.log(P1); //minahil

//it also define index
enum Data {
    h=10,i,j
}
const defineIndex : Data = Data.j
console.log(defineIndex); //12


//Join Method
// It creates a string by concatenating all the elements of the array, separated by a specified separator.
let fruits:string[]=["Apple", "Banana", "Cherry"];
// let joinMethod = fruits.join() // // Apple,Banana,Cherry
// let joinMethod = fruits.join(" and ") // Apple and Banana and Cherry
let joinMethod = fruits.join("-") //Apple-Banana-Cherry
console.log(joinMethod);

//concat Method
//combines two or more arrays into one new array without changing the original arrays.
let arr1 : number[] = [1,2,3]
let arr2 : number[] = [4,5,6]
let result = arr1.concat(arr2)
console.log(result); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); //[4,5,6] doesnt change

