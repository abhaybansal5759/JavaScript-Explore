// // The promise is an object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// /* Promise States - 
//      a. pending - initial State, neither fulfilled nor rejected.
//      b. fulfilled - meaning that the operation was completed successfully.
//      c. rejected - meaning that the operation failed. */

     
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, Cryptography, network 

    setTimeout(function(){
        console.log('Async task is complete ');
        resolve()
    },1000)
}) 

// resolve has a connection with .then

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
console.log("running 3");
resolve({username:"Chai", email:"cah@gms.com"})
},1000)
})
promiseThree.then(function(user){
    console.log(user);   
})


const promisefour = new Promise(function(resolve,reject){
setTimeout(function(){
let error = true
if(!error){
    resolve({username:"hit",password:"123"})
}else{
    reject('ERROR:something went wrong')
}
},1000)
})

promisefour.then((user)=>{
console.log(user);
return user.username

}).then((username)=>{
console.log(username);

}).catch(function(error){
console.log(error);

}).finally(()=>console.log("The promise is either resolve or rejected "))

const promiseFive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"hitman",password:"123"})
    }else{
        reject('ERROR:27-file went wrong')
    }
},1000)
})

async function consumePromiseFive(){
try {
    const response = await promiseFive
console.log(response);
} catch (error) {
    console.log(error);
}
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    //console.log(response);

//    const data= await response.json()
//    console.log(data);   
//     } catch (error) {
//         console.log("E:",error);
    
//     } 
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error) => console.log(error))

// getAllUsers()