// generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#' ; 
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*10+1)];
        console.log(color);
    }
    return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
    if(!intervalId){
    alert('color change program is start now') ;
   intervalId = setInterval(changeBgColor,1000);
}
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
    alert('color program is stop');
    clearInterval(intervalId);
    intervalId = null;
    console.log("stop....", intervalId);

};

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);
