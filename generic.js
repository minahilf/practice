"use strict";
//generics
/* allow you to create reusable and flexible components. They enable you to define functions, classes, or
interfaces that can work with different data types without specifying the exact type upfront */
Object.defineProperty(exports, "__esModule", { value: true });
//generic function
function data(a) {
    return a;
}
data("a"); // T is string
data(3); // T is number
data({ name: "minahil", age: 20 });
// <T> is the generic type parameter.
//generic class
class Animal {
    name;
    constructor(n) {
        this.name = n;
    }
}
let a1 = new Animal("Dog");
