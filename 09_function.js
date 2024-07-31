
function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("y");
    
}

// sayMyName =>refrence

// sayMyName() => execution
// using paranthesis after function name is known execution

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result

    return number1+number2
}
const result = addTwoNumbers(3,4)

// console.log("result: ",result); 

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
return `${username} just logged In`
}

console.log(loginUserMessage())


function calculatePrice(val1,val2,...num1){  //... these dots are rest operator 
    return num1;
}

// console.log(calculatePrice(200,400,600,2000));
const user = {
    username:"Abhay",
    price:199
}

function handleObject(anyobject){
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username:"sam",
    price:399
})

const myArray = [200,400,600,800];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,600,100]));
