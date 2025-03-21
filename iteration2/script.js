//initialising variables
let value = 0;
let incrementValue = parseInt(localStorage.getItem('incrementValue'));
let limit = parseInt(localStorage.getItem('limit'));

// fetching value and limit range from ID, compares it to check if message should be displayed
function updateDisplay() {
    document.getElementById('value').textContent = value;
    document.getElementById('limit').textContent = limit;
    if (value > limit || value < -limit) {
        //boom appears
        document.getElementById('boom').textContent = 'BOOM';
        // value turns red
        document.getElementById('value').style.color = 'red';
    } else {
        document.getElementById('boom').textContent = '';
        document.getElementById('value').style.color = 'black';
    }
}

// Event listener for increment button, adds the value by every click
document.getElementById('increment').addEventListener('click', () => {
    value += incrementValue;
    updateDisplay();
});

// Event listener for decrement, subtracts the value for every click
document.getElementById('decrement').addEventListener('click', () => {
    value -= incrementValue;
    updateDisplay();
});

// Event listener for input and puts in local storage
document.getElementById('increment-value').addEventListener('input', (event) => {
    incrementValue = parseInt(event.target.value);
    localStorage.setItem('incrementValue', incrementValue);
});


document.getElementById('limit').addEventListener('input', (event) => {
    limit = parseInt(event.target.value);
    localStorage.setItem('limit', limit);
    updateDisplay();
});

// Initial display update
updateDisplay();
