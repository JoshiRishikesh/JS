// // // premitive
// // node 01_basics/datatypes-summary.js

// // // 7 types:- String, Number, Boolean, Undefined, null, Symbol, BigInt

// // // Refrence (Non - Premetive):- Array, Objects, Functions
// // const heros = ["Shaktiman", "Nagraj", "Doga"]
// // let myObj = {
// //     name: "Rishi",
// //     age: 22,
// // }

// // const myFunction = function(){
// //     console.log("Hello World");
// // }


// // Stack (Primitive), Heap (Non Primitive)

// let myYoutubeName = "Rishijoshi"
// let anotherName = myYoutubeName

// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "rishi@google.com"
console.log(userOne.email);
console.log(userTwo.email);



// ***************************************************************************************************************************