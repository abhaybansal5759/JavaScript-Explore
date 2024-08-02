// for of 

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
     
// }

const greeting = "Hello world"
for (const greet of greeting) {
                    
    // console.log(`each cagr is ${greet}`);    
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) { // destructure 
   // console.log(key,':', value);    
}

const mybject = {
    game1 :' NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of mybject) {
//     console.log(key,':',value);
    
// } // it givr error because we cant to do it like that . so for removing the erro visit on next file 
// for of loop is not working on object , but it wworks on map 

