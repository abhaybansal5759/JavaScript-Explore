// truthy means => when we imagine a string is true value then its known as truthy value.

// const userEmail = "abhay@gmil.com"
const userEmail = []

if(userEmail){
    console.log("got user email");
} else{
    console.log("don't have user email");
}

// falsy value 
// false, 0, -0, BigInt 0n, "", null,undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

// const emptyObject ={}

// if(Object.keys(emptyObject).length ===0){
//     console.log("object is empty");
// }

