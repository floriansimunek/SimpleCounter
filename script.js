let counter = 0;
const counterValueText = document.getElementById('counter-value');
const minusBtn = document.getElementById('minus-button');
const plusBtn = document.getElementById('plus-button');

minusBtn.addEventListener('click', function(){
    counter--;
    counterValueText.textContent = counter; 
})

plusBtn.addEventListener('click', function(){
    counter++;
    counterValueText.textContent = counter;    
})

