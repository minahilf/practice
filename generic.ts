//generics
/* allow you to create reusable and flexible components. They enable you to define functions, classes, or 
interfaces that can work with different data types without specifying the exact type upfront */

//generic function
function data<T>(a:T):T {
    return a
}
data("a") // T is string
data(3) // T is number
data({name: "minahil", age: 20});

// <T> is the generic type parameter.

//generic class
class Animal<T>{
    name: T;
    constructor(n:T){
        this.name=n
    }
}
let a1 = new Animal("Dog")