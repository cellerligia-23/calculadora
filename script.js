let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  
  display.value = eval(display.value);
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let newDisplay = display.value.slice(0, -1); // Get everything but the last character
 
  display.value = newDisplay
}