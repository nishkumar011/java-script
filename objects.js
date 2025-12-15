// singleton

// object literals
// Object.create
const mySym = Symbol("key1")

const jsuser = {
    name:"Hitesh",
    "full name": "Nishant kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Indore",
    email:"nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// // console.log(jsuser.email)
// // console.log(jsuser["email"])
// // console.log(typeof jsuser[mySym])

// // jsuser.email = "nishant@chatgpt.com"
// // console.log(jsuser);

// Object.freeze(jsuser)

jsuser.greeting = function() {
    console.log("Hello JS user");
}

jsuser.greetingtwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

