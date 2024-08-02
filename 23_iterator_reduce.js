const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc+currval
// },0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemNamee:"Js course",
        price:299
    },
    {
        itemNamee:"python course",
        price:999
    },
    {
        itemNamee:"Mobile dev course",
        price:5999
    },
    {
        itemNamee:"Data Science course",
        price:12999
    },
    {
        itemNamee:"Js course",
        price:1299
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
