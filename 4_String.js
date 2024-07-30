const { logger } = require("prompt")

const name = 'Abhay'
const repoCount= 50

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abhay-Banal-1234')
// it will like an array like [A,B,H,A,Y] that's why we can accees this by position 

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString  = gameName.slice(-8,4)
// console.log(anotherString);

// const newstrininee = "   Abhay     ";
// console.log(newstrininee);
// console.log(newstrininee.trim());

const url = "https://abhaybansal%20.com/abhay"

// console.log(url.replace('%20','-'))

// console.log(url.includes('abhay'));

// console.log(gameName.split('-'));

// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log((Math.random()*10)+1);

const min=10
const max =20
// console.log(Math.floor(Math.random()*(max-min+1))+min);

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString);

console.log(typeof myDate);

let mycreatedDate = new Date(2023,0,23);
console.log(mycreatedDate.toDateString());