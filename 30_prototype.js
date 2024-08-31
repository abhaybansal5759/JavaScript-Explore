let myName = "Abhay   "

// console.log(myName.trim().length); // it is not a good practice 

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.abhay = function(){
    console.log(`abhay is present in all objects`);
    
}

Array.prototype.heyAbhay = function(){
    console.log(`Abhay says hello`);
    
}
// heroPower.abhay()
// myHeros.abhay()
myHeros.heyAbhay()
// heroPower.heyAbhay()

// Inheritance

const User = {
    name: "AbhayBansal",
    email:hgj@gmhaj.dsj

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupoort = {
    makeAssignment:'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)