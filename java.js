// Get the HTML element with the id "user-input" and store it in the constant inputValue
const inputValue = document.getElementById("user-input");

// Define a function to clear the input field
function clearScreen() {
  // Set the value of the input field to an empty string, effectively clearing it
  inputValue.value = "";
}

// Define a function to display a value in the input field
function display(value) {
  // Append the given value to the current value of the input field
  inputValue.value += value;
}

// Define a function to calculate the result of the expression in the input field
function calculate() {
  // Get the current value of the input field and store it in the variable p
  var p = inputValue.value;
  // Use the eval function to evaluate the expression in p and store the result in q
  var q = eval(p);
  // Set the value of the input field to the result q
  inputValue.value = q;
}

// Add an event listener to the document that listens for keydown events
document.addEventListener("keydown", function(event) {
  // Get the key that was pressed and store it in the constant keyValue
  const keyValue = event.key;
  
  // Use a switch statement to determine what to do based on the key that was pressed
  switch (keyValue) {
    // If the key is a digit (0-9), display it in the input field
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      display(keyValue);
      break;
    // If the key is an operator (+, -, *, /), display it in the input field
    case "+":
    case "-":
    case "*":
    case "/":
      display(keyValue);
      break;
    // If the key is a decimal point, display it in the input field
    case ".":
      display(".");
      break;
    // If the key is the Enter key, calculate the result of the expression
    case "Enter":
      calculate();
      break;
    // If the key is the Backspace key, remove the last character from the input field
    case "Backspace":      
      inputValue.value = inputValue.value.slice(0, -1);
      break;
    // If the key is the "c" or "C" key, clear the input field
    case "c":
    case "C":
      clearScreen();
      break;
    // If the key is none of the above, do nothing
    default:
      break;
  }
});