const screen = document.getElementById('screen');
let currentValue = '';

function appendValue(val) {
    if (currentValue === '0' && val !== '.') {
        currentValue = val;
    } else {
        currentValue += val;
    }
    screen.textContent = currentValue;
}

function clearScreen() {
    currentValue = '';
    screen.textContent = '0';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        screen.textContent = currentValue;
    } catch (error) {
        screen.textContent = 'Error';
        currentValue = '';
    }
}