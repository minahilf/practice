type deal1 = {
    food1:string
    food2:string
    price:number
}

type deal2 = {
    food3:string
}

type Food = deal1 & deal2

let Khana:Food = {
    food1: "Pizza",
    food2: "Burger",
    food3: "Roll",
    price: 2400
}

console.log(Khana);
