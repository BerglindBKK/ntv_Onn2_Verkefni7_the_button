
let value = 0;

// display function updates after every click
function updateDisplay() {
    document.getElementById('value').textContent = value;
    if (value > 35 || value < -35) {
        document.getElementById('boom').textContent = 'BOOM';
    } else {
        document.getElementById('boom').textContent = '';
    }
}

// Event listener for increment button, adds 5 by every click
document.getElementById('increment').addEventListener('click', () => {
    value += 5;
    updateDisplay();
});

// Event listener for increment button, minus 5 for every click
document.getElementById('decrement').addEventListener('click', () => {
    value -= 5;
    updateDisplay();
});

// Initial display update
updateDisplay();
