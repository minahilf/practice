"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function  types
// 1, named function
function greet() {
    console.log("hello");
}
//2, anonymous function
let func = function () {
    console.log("minahil");
};
//3, Arrow function
let myfunc = () => {
    console.log("minu");
};
//4, Immediately Invoked function expressions: executed immediately 
(() => {
    console.log(2);
})();
//5, Higher order function: that accepts function as parameters like its a predefined function
//  .map(), .filter()
// 6, constructor function
class user {
    name = "";
    age = 0;
    education = "";
    constructor(n, a, e) {
        this.name = n;
        this.age = a;
        this.education = e;
    }
}
let u1 = new user("minahil", 20, "BSCS");
