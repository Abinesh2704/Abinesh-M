let button = document.querySelector("button");
button.addEventListener("click", clicking);
let result = document.getElementById("results");
let input = document.getElementById("inputs");

function clicking() {
    let sum = document.getElementById("arithmetic");
    let operator = sum.options[sum.selectedIndex].value;  // Get the selected operator
    console.log(operator);

    let a = Number(document.getElementById("inp1").value);  // Convert to number
    let b = Number(document.getElementById("inp2").value);  // Convert to number

    switch (operator) {
        case "+":
            input.value = a + b;  // Update the input field's value with the result
            break;
        case "-":
            input.value = a - b;  // Update the input field's value with the result
            break;
        case "*":
            input.value = a * b;  // Update the input field's value with the result
            break;
        case "/":
            if (b !== 0) {
                input.value = a / b;  // Update the input field's value with the result
            } else {
                input.value = "Error: Division by zero";  // Handle division by zero
            }
            break;
        default:
            input.value = "Invalid operator";  // Handle invalid operator
            break;
    }
    result.innerHTML="Your Value Is : "+input.value;

    console.log(input.value);  // Output the result to the console
}
