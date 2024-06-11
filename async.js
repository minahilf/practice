"use strict";
//fetch : its a pre-predefined function which return promise or used to fetch data
//It requires API
//API is like an API is a messenger that takes requests and tells a system what you want to do. It then returns
// the response back to you. It helps different software programs talk to each other and share information.
Object.defineProperty(exports, "__esModule", { value: true });
let url = "https://jsonplaceholder.typicode.com/posts/1";
// let fetchData = fetch(url)
// .then((res)=>(res.json()))
// .then((data)=>console.log(data))
// .catch((err)=>(console.log(err)))
// console.log(fetchData);
//async function
//it return promise
let myFunction = async () => {
    let fetchData = await fetch(url);
    let response = await fetchData.json();
    console.log(response);
};
myFunction();
