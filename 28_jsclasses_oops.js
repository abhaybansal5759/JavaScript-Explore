// Object and Classes

// const { prototype } = require("prompt")

// Oop

// Object

// - collection of properties and methods
// - toLowerCase

// why use oop 

// parts of oop
// - Object Literal

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new, this)

// 4 pillars
// -Abstraction
// -Encapsulation
// -Inheritance
// -Polymorphism

// -------------------------------------------------------

const user = {
    username: "Abhay",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("Got user details from db");
        // console.log(`username: ${this.username}`);
       console.log(this);
        
    }
}
 
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    // return this
}

const userOne = new User("Abhay", 12, true)
const userTwo = new User("Abhay_Bansal", 10, false)

console.log(userOne.constructor);
// console.log(userTwo);

