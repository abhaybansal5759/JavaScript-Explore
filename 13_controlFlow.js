// if

const isUserLoggedIn = true
const temperature ="41"
// console.log(typeof temperature)
// if(temperature < 50){
//   console.log("less then 50");
// }else{
// console.log("temperature is greater than 50")}
// console.log("end bhai")
// <,>,<=,>=,==,!=,===, !==

// const score = 200
// if(score >100){
//     var power = "fly"
//     console.log(`user power: ${power}`);

// }
// console.log(`user power: ${power}`);

// const balance =700 
// if(balance < 3000) console.log("test")
// else console.log("no prob")

// if(balance < 500){
//     console.log("less then 500");
// }
// else if(balance < 750){
//     console.log("less then 750");
// }
// else if(balance < 900){
//     console.log("less then 900");
// }
// else{
//     console.log("less then 1200");
// }.


const userLoggedIn = true;
const debitcard =true;
const loggedInFromGoogle = false
const loggedInFromEmail= true
if(userLoggedIn && debitcard && 2==3){
    console.log("allow");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logedIn");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined??15
// val1 = null ??10??20

// console.log(val1);


// ***********************TERNARY operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less then 80"): console.log("more than 80");

