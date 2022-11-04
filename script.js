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
    }, 3000);
}

function requestNumber(){
    let userArray = [];
    setTimeout(function(){
        
        for (let index = 1; index <= 5; index++) {
            const userNum = Number(prompt(`Inserici il numero ${index} di 5`))
            userArray.push(userNum);67
        }
    }, 3000);
    return userArray;
}

function checkCorrect(exNumber){
    const usNumber = requestNumber();
    console.log(usNumber);
    let correctNum = [];
    setTimeout(function(){
        for (let i = 0; i < exNumber.length; i++) {
            for (let x = 0; x < usNumber.length; x++) { 
                if(exNumber[i] === usNumber[x]){
                    correctNum.push(exNumber[i]);
                }
            }
        }
        console.log("di seguito l'array con i numeri corretti", correctNum);
        console.log("di seguito il numero di risposte giuste", correctNum.length)
    }, 3000)
    return correctNum.length;
}

const numberVisualization = document.querySelector('.numeri');
const extractedNumber = arrayPopulation(100);
console.log(extractedNumber);
displayed(extractedNumber);
notDisplayed();
const correctNumber = checkCorrect(extractedNumber);




