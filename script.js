"user strict";

function arrayPopulation(maxNumber){
    let cpuArray = [];
    while(cpuArray.length < 5){
        const randomNumber = msMathRandom(maxNumber);
        if(!cpuArray.includes(randomNumber)){
            cpuArray.push(randomNumber);
        }
    }
    return cpuArray;
}

// funzione che genera un numero casuale da 1 a numMax
function msMathRandom(nMax){
    const result = Math.floor(Math.random() * nMax) + 1;
    return result;
}

function displayed(numbers){
    numberVisualization.innerHTML = numbers;
}

function notDisplayed(){
    setTimeout(function(){
        numberVisualization.innerHTML = "";
    },3000);
}

function requestNumber(){
    let userArray = [];
    setTimeout(function(){
        for (let index = 1; index <= 5; index++) {
            userArray.push(Number(prompt(`Inserici il numero ${index} di 5`)));
        }
    },3000);
    return userArray;
}

function checkCorrect(exNumber,usNumber){
    let correct = 0;
    for (let i = 0; i < exNumber.length; i++) {
        for (let x = 0; x < usNumber; x++) { 
            if(exNumber[i] === usNumber[x]){
                correct += 1;
            }
        }
    }
    return correct;
}

const extractedNumber = arrayPopulation(100);
const numberVisualization = document.querySelector('.numeri');
console.log(extractedNumber);
displayed(extractedNumber);
notDisplayed();
const userNumber = requestNumber();
console.log(userNumber);
const result = checkCorrect(extractedNumber, userNumber);
console.log(result);


