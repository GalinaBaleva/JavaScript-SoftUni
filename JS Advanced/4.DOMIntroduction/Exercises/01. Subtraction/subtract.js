function subtract() {
    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);

    let result = document.getElementById('result');
    const subtracting = num1 - num2;
    result.textContent = subtracting.toString();
}