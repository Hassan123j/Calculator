
let currentInput = '';
let operator = null;

function updateDisplay() {
    const display = document.getElementById('display');
    if (currentInput === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentInput;
    }
}

function appendDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;

    if (operator) {
        currentInput = evaluate();
    }

    currentInput += ` ${op} `;
    operator = op;
    updateDisplay();
}

function evaluate() {
    try {
        const result = eval(currentInput.replace('×', '*').replace('÷', '/'));
        return result.toString();
    } catch (e) {
        console.error(e);
        return '';
    }
}

function calculate() {
    if (!operator) return;

    currentInput = evaluate();
    operator = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    if (currentInput === '') return;

    currentInput = currentInput.slice(0, -1).trim();
    updateDisplay();
}
