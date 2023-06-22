const counter = document.querySelector('.counter');
let myCounter = 0;
counter.innerText = myCounter;
const incrementBtn = document.querySelector('.incrementBtn');
incrementBtn.addEventListener('click', function(){
    myCounter++;
    counter.innerText=myCounter;
});

const decrementBtn = document.querySelector('.decrementBtn');
decrementBtn.addEventListener('click', function(){
    if (myCounter > 0){
        myCounter--;
        counter.innerText=myCounter;
    }
});

