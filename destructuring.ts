//Array Destructuring
let arr = ["minahil", 40, "abc@gmail.com"]
let [name1,age,email] = arr //dont have to write index for accessing any array just make it and use it
console.log(name1);

//Object Destructuring
let obj = {
    fullName : "Minahil",
    lastName : "Fatima",
    age1 : 20,
    hobbies : ["a", "b", "c"]
}
let {fullName, lastName, age1, hobbies} = obj
console.log(age1);
console.log(hobbies[0]);
console.log(fullName + " " + lastName);

