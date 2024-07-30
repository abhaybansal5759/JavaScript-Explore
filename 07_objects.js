const mySym = Symbol("key1")

const JsUser = {
    name:"Abhay",
    "full Name": "Abhay bansal",
    [mySym]:"myKey1", 
    age:18,
    email:"abhay@ghj.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser[mySym]);

// if you want to override 

JsUser.email = "abhaybansal@chsf.vom"
// Object.freeze(JsUser)
// JsUser.email = "abhaybansal@chef.vom"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
    
