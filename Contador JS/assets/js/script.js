var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0
var buttonAdicionar = document.getElementById('adicionar');
var buttonSubtrair = document.getElementById('subtrair');

buttonAdicionar.addEventListener("click", increment);
buttonSubtrair.addEventListener("click", decrement);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    }
    if(currentNumber > 10){
        currentNumber = 10;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    if(currentNumber < -10){
        currentNumber = -10;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}