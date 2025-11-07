// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);



// Refrence type(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman ", "naagraj", "doga"]
let myObj = {
    name : "hitesh",
    age : 22,
}

const myfunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof id);
console.log(typeof heros);
