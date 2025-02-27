const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const buttonAC = document.getElementById('buttonAC')
const buttonDivide = document.getElementById('buttonDivide')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const buttonNegative = document.getElementById('buttonNegative')
const buttonMultiply = document.getElementById('buttonMultiply')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const buttonPercentage = document.getElementById('buttonPercentage')
const buttonSubtract = document.getElementById('buttonSubtract')
const button0 = document.getElementById('button0')
const buttonDecimal = document.getElementById('buttonDecimal')
const buttonEqual = document.getElementById('buttonEqual')
const buttonAddition = document.getElementById('buttonPlus')
const display = document.getElementById('display')

//variable that will hold current typed number until an operator is pressed (=+-%...)
const operationContainer = document.createElement('p')
    operationContainer.textContent = ''

//create text to display input history
const displayHistory = document.createElement('p')
displayHistory.classList.add('displayInfo')
displayHistory.textContent = ''
display.appendChild(displayHistory)

//create text for the display screen
const displayInfo = document.createElement('p')
    displayInfo.classList.add('displayInfo')
    displayInfo.textContent = ''
    display.appendChild(displayInfo)

//input will first enter here to determine operation type which will send it to another function
function operate(firstnum, operator, secondnum) {
    switch (operator) {
        case 'plus':
            functionAddition(firstnum,secondnum)
            break;
        case 'subtract':
            functionSubtraction(firstnum, secondnum)
            break;
        case 'multiply':
            functionMultiply(firstnum,secondnum)
            break;
        case 'divide':
            functionDivide(firstnum, secondnum)
    }
}

button7.addEventListener('click', () => {
    displayInfo.textContent +='7'
    operationContainer.textContent += '7'
})

button8.addEventListener('click', () => {
    displayInfo.textContent +='8'
    operationContainer.textContent += '8'
})

let operation = []

buttonAddition.addEventListener('click', () => {
    operation.push(operationContainer.textContent)
    console.log(operation)    
    console.log(operationContainer.textContent)
    operationContainer.textContent = ''
    displayInfo.textContent += '+'
})

buttonEqual.addEventListener('click', () => {
    
})