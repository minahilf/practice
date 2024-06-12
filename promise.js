"use strict";
//promise object properties
// A javascript promise object can be: Pending, fulfilled (resolved), Rejected
//promise object support two properties: state and result
//while a promise object is pending(working), the result is undefined
//while a promise object is fulfilled, the result is a value
//while a promise object is rejected the result is an error object
Object.defineProperty(exports, "__esModule", { value: true });
//syntax
//let myPromise = new Promise((resolve,reject)=> {})
//example
let promise = new Promise((resolve, reject) => {
    console.log("hello");
    resolve("wow"); //print hello
});
let p1romise = new Promise((resolve, reject) => {
    reject("error"); //threw error
});
//resole hone k bd hame kch kaam karana h to .then() use krenge 
let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        resolve("Promise fullfilled");
    });
};
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("HELLO THEN", res); // output: I am promise promise fullfilled HELLO THEN
// })
//reject hone k bd hame kch kaam karana h to .catch() use krenge
// let getPromise = () => {
//     return new Promise((resolve,reject)=> {
//         console.log("I am promise");
//         reject("error")
//     })
// }
// let promise = getPromise();
// promise.catch((err)=>{
//     console.log("HELLO CATCH", err); //output: I am promise HELLO CATCH
// })
function asyncData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data");
            console.log("finished successfully");
        }, 4000);
    });
}
console.log("FETCHING DATA....");
let promise1 = asyncData();
promise.then((res) => {
    console.log(res); //output FETCHING DATA....AFTER 4 SEC data finished succesfully
});
