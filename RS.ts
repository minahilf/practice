// Spread Operator
//Spread: Expands elements
//The spread operator (...) is used to expand elements of an array or object.
let arr1 : number[] = [1,2,3]
let arr2 : number[] = [4,5,6]
let result = [...arr1,...arr2]
console.log(result); //[ 1, 2, 3, 4, 5, 6 ]

//EXAMPLE
let data1 = {
    name:"minahil",
    age: 20,
    education:"BSCS"
}

let data2 = {
    ...data1,
    name: "Kashaf",
    email: "abc@gmail.com"
}
console.log(data1); //{ name: 'minahil', age: 20, education: 'BSCS' }
console.log(data2); //{ name: 'Kashaf', age: 20, education: 'BSCS', email: 'abc@gmail.com' }


// Rest Operator
//Rest: Collects elements.
//The rest operator (...) is used to collect multiple elements into an array.

let obj1 = {
    name: "minahil",
    age: 20,
    education: "BSCS"
}

const {...data} = obj1
console.log(obj1); //{ name: 'minahil', age: 20, education: 'BSCS' }



