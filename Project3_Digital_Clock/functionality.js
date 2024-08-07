const clocks = document.getElementById('clock')
// document.querySelector('#clock')
// console.log(clocks);



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clocks.innerHTML = date.toLocaleTimeString();
},1000);


