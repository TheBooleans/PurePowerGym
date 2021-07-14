'use strict'


const calculation = document.getElementById('form');

calculation.addEventListener('submit', calculations)

let TextResult = document.getElementById('textresult')



function calculations(event) {
    console.log(event);
    event.preventDefault()
    const weight = Number(event.target.userweight.value);
    const height = Number(event.target.userheight.value);
    let BMI = ((weight / (height * height)) * 10000).toFixed(1);

    // function createlink(linkExtension){
    //     let planlink = document.createElement('a')
    //     TextResult.appendChild(planlink)
    //     planlink.setAttribute('href',`${linkExtension}`)
    //     planlink.textContent='Plan section'
    //     }

    // const result=document.getElementById('result');
    // const text=document.createElement('div');
    // result.appendChild(text);
    // text.setAttribute('id','bmiresult')
    const text = document.getElementById('bmiresult')

    if ((weight == 0 && height == 0) || (weight == 1 && height == 0)) {
        BMI = (0).toFixed(1)
    }
    text.textContent = BMI

    
    

    if (BMI < 18.5) {
        TextResult.innerHTML = '<p>Your Body mass index shows that you are Underweight  we recommand you  to follow Plan A from our plan section below to be in your best shape.    </p>  <a href="../pages/plans.html">Plan section</a>'
        
    } else if (BMI >= 18.5 && BMI < 25) {
        TextResult.innerHTML = '<p>Your Body mass index shows that your weight is normal we recommand you to follow Plan B from our plan section below to maintain your weight.      </p> <a href="../pages/plans.html">Plan section</a>'
        
    } else if (BMI >= 25) {
        TextResult.innerHTML = '<p>Your Body mass index shows that you are Overweight we recommand you to follow Plan C from our plan section below to be in your best shape.        </p>  <a href="../pages/plans.html">Plan section</a>'

    } else {
        TextResult.innerHTML = '<p>Wrong inputs, please input your Weight in kg and your Height in cm in the inputs <p>'
    }

}