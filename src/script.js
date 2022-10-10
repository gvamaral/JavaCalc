// var myVar = {
//     boolean:true,
//     number:839,
//     string:"My name is not know by humanity",
//     object:{firstName:"Justin", value:50},
//     myFunction: function(yourName){
//         var yourName = prompt('Tell me your name?');
//         return alert(`Created, Master ${yourName}!`);
//     }};

// function doubleTheNumber(numberToDouble) {
//     return numberToDouble * 2;
// }

// var numberInputted = prompt('Input a number:');
// var numberDoubled = doubleTheNumber(numberInputted);
// var nextVar = myVar.string + myVar.object;

// document.getElementById("parag").innerHTML = `The Double of your number is ${numberDoubled}`;

/* Above code is practice */
// ----------------------------------------------------------------------------------------------- //
//Goal:
// is when person clicks the button, the 'name' div gets the text that is in the
// input and show the input text

// click the button

var inputElement = document.querySelector('#myNameInput')
var divToShowTheName = document.querySelector('#myName')
var numberFirstInput = document.querySelector('#myFirstNumber')
var numberSecondInput = document.querySelector('#mySecondNumber')
var divResult = document.querySelector('#result')

function updateTheName() {
    var nameFromInputElement = inputElement.value;

    var isForbiddenScott = nameFromInputElement.toLowerCase().includes('scott')

    if(nameFromInputElement.length == 0) {
        alert('Need a name inputted')
    }
    else if(isForbiddenScott) {
        alert('No Scotts allowed!')
    }
    else {
        divToShowTheName.innerHTML = `Hi ${nameFromInputElement}, please checkout the page bellow!`;
    }

}
function makeSum() {
    var firstNumber = numberFirstInput.value;
    var secondNumber = numberSecondInput.value;
    var divResultSum = +firstNumber + +secondNumber;
    var divResultString = firstNumber + secondNumber;
    
    console.log(divResultString)
    if (+firstNumber && +secondNumber) {
        divResult.innerHTML = divResultSum
    }
    else {
        divResult.innerHTML = firstNumber + secondNumber;
    }
}
function makeTimes() {
    var firstNumber = numberFirstInput.value;
    var secondNumber = numberSecondInput.value;

    divResult.innerHTML = parseInt(firstNumber) * parseInt(secondNumber);
}

inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

numberFirstInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("plusBtn").click();
    }
});

numberSecondInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("timesBtn").click();
    }
});

// Calculator
let num1 = document.getElementById("one");
let num2 = document.getElementById("two");
let num3 = document.getElementById("three");
let num4 = document.getElementById("four");
let num5 = document.getElementById("five");
let num6 = document.getElementById("six");
let num7 = document.getElementById("seven");
let num8 = document.getElementById("eight");
let num9 = document.getElementById("nine");
let num0 = document.getElementById("zero");
let output = document.getElementById("output");

const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".buttons")
const display = document.querySelector(".screen")

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        function calculate(n1, operator, n2) {
            let result = ''
            if(operator === 'add'){
                result = +n1 + +n2;
            }
            else if(operator === 'subtract'){
                result = +n1 - +n2;
            }
            else if(operator === 'multiply'){
                result = +n1 * +n2;
            }
            else if(operator === 'divide'){
                result = +n1 / +n2
            }
            return result
        }
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        if (!action) {
            console.log('number key!')
            if (displayedNum === '0' || calculator.dataset.previousKey === 'operator') {
                display.textContent = keyContent
            }
            else {
                display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKey = 'number'
        }
        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            console.log('operator key!')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && calculator.dataset.previousKey !== 'operator' && calculator.dataset.previousKey !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                calculator.dataset.firstValue = calcValue
            }
            else {
                calculator.dataset.firstValue = displayedNum
            }
            key.classList.add('is-depressed')
            calculator.dataset.previousKey = 'operator'
            calculator.dataset.operator = action
        }
        if (action === 'decimal') {
            console.log('decimal key!')
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + "."
            }
            else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKey = 'decimal'
        }

        if (action === 'clear') {
            console.log('clear key!')
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.secondValue = ''
                calculator.dataset.previousKey = ''
                calculator.dataset.operator = ''
            }
            else {
                key.textContent = 'AC'
            }
            if (display.textContent !== '58008'){
                calculator.style.transform = ''
            }
            if (display.textContent !== '666'){
                display.style.backgroundImage = ''
            }
            display.textContent = 0
            calculator.dataset.previousKey = 'clear'
        }

        if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }

        if (action === 'calculate') {
            console.log('equal key!')
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            let secondValue = displayedNum
            if (firstValue) {
                if (calculator.dataset.previousKey == 'calculate'){
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                    display.textContent = calculate(firstValue, operator, secondValue)
                }
                else {
                    display.textContent = calculate(firstValue, operator, secondValue)
                }
            }

            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKey = 'calculate'
        }
        
        if (display.textContent === "666" ) {
            display.style.backgroundImage = 'url(images/flame.gif)';
            display.style.backgroundSize = "cover";
            display.style.backgroundPosition = "center";
        } 
        else if(display.textContent === "58008") {
            calculator.style.transition = "all 2s";
            calculator.style.transform = "rotate(180deg)";
        }
        else {
            calculator.style.transform = '';
            display.style.backgroundImage = ''
        };
    }
   })