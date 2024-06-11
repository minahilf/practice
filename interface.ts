interface person  {
    fullName : string,
    age: number
}

interface employee extends person { //extends person property in employee
    email: string
}

let student:person ={
    fullName : "minahil",
    age: 20
}

let Employee:employee = {
    fullName: "fatima",
    age: 20,
    email: "abc@abc.com"
}

//type vs interface
//syntax: interface interfaceName {}
//syntax: type typeName = {}

/* type name1 = string
type age = number

type obj  = {
    name13: name1,
    age1: age
} */