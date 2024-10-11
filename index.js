function cal() {
    const fnumber = document.getElementById('fnumber').value;
    const op = document.getElementById('op').value;
    const snumber = document.getElementById('snumber').value;
    const output = document.getElementById('output');

    // Validate the inputs
    if (isNaN(fnumber) || fnumber.trim() === "") {
        alert("Invalid input for the first number. Please enter a valid number.");
        return;
    }

    if (isNaN(snumber) || snumber.trim() === "") {
        alert("Invalid input for the second number. Please enter a valid number.");
        return;
    }

    const validOps = ['+', '-', '*', '/'];
    if (!validOps.includes(op)) {
        alert("Invalid operation. Please enter one of the following: +, -, *, /.");
        return;
    }

    const num1 = parseFloat(fnumber);
    const num2 = parseFloat(snumber);

    // Perform the calculation
    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
    }

    // Display the result
    output.value = result;
}

function fields() {
    document.getElementById('fnumber').value = '';
    document.getElementById('op').value = '';
    document.getElementById('snumber').value = '';
    document.getElementById('output').value = '';
}
