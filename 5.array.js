// // array

const myArr = [0,1,2,3,4];

const myHeroes = ["shaktiman","nagraj"];

const myArr2 = new Array(1,2,3,4);

// console.log(myHeroes[1]);

// // Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
// // myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice
// splice remove the element from that position to end position 

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);

console.log(myn2); 