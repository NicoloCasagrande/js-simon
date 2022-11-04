"user strict";

const extractedNumber = arrayPopulation(100);


const numberVisualization = document.querySelector('.numeri');

console.log(extractedNumber);

function arrayPopulation(maxNumber){
    let bombPosition = [];
    while(bombPosition.length < 5){
        const randomNumber = msMathRandom(maxNumber);
        if(!bombPosition.includes(randomNumber)){
            bombPosition.push(randomNumber);
        }
    }
    return bombPosition;
}

// funzione che genera un numero casuale da 1 a numMax
function msMathRandom(nMax){
    const result = Math.floor(Math.random() * nMax) + 1;
    return result;
}

setTimeout(displayed(extractedNumber), 30000);
const userNumbers = requestNumber();
console.log(userNumbers);
const result = checkCorrect(extractedNumber, userNumbers);
console.log(result);

function displayed(numbers){
    numberVisualization.innerHTML = numbers;
}

function requestNumber(){
    let userArray = [];
    for (let index = 1; index <= 5; index++) {
        userArray.push(Number(prompt(`Inserici il numero ${index} di 5`)));
    }
    return userArray;
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



