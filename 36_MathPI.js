const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

console.log(descriptor);



const chai = {
    name: 'ginger chai',
    price:250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,Value] of Object.entries(chai)) {
    if (typeof Value !== 'function') {
        console.log(`${key} : ${Value}`); 
    }
}
