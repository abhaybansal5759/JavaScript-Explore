// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

// why we use IIFE =>  global scope k pollution se problem hoti hai kai baar toh use global scope k jo variables hai jo bhi vha declaration hai uske pollution ko htane k liye IIFE use krte hai 

( (name) => {
    // Without named IIFE
    console.log(`DB connected Two ${name}`);
}) ('Abhay')

// we can write 2 IIFE together by using terminator 


function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}
one()
two()
three()