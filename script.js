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
    setTimeout(function(){
        let userArray = [];
        for (let index = 1; index <= 5; index++) {
            userArray.push(Number(prompt(`Inserici il numero ${index} di 5`)));
        }
        return userArray;
    },3000);
}

function checkCorrect(extractedNumber,userNumber){
    let correct = 0;

    for (let i = 0; i < extractedNumber.length; i++) {
        const element1 = extractedNumber[i];
        for (let x = 0; x < userNumber; x++) {
            const element2 = userNumber[x];  
            if(element1 === element2){
                correct++;
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
const result = checkCorrect(extractedNumber, userNumbers);
console.log(result);


