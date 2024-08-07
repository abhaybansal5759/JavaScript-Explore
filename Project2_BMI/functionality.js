const form = document.querySelector('form');
// this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`;
    } 
    else{
      const bmi = (weight/((height*height)/10000)).toFixed(2)
      console.log(bmi);

      // show the result 
       result.innerHTML = `<span>${bmi}</span>` ;
       if(bmi<18.6){
        result.innerHTML = `${bmi} : you are Under Weight`;
      }
      else if(bmi<24.9){
        result.innerHTML =`${bmi} : you are in Normal Range`;
      }
      else if(bmi>24.9){   
        result.innerHTML = `${bmi} : you are Overweight`;
      }
    }

    

    // result.innerHTML = `${height}`;


});
