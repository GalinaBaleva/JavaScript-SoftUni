function calculator(number, operator, secondNumber) {
               if (operator === '+') {
                              console.log((number + secondNumber).toFixed(2));
               } else if (operator === '-') {
                              console.log((number - secondNumber).toFixed(2));
               } else if (operator === '/') {
                              console.log((number / secondNumber).toFixed(2));
               } else if (operator === '*') {
                              console.log((number * secondNumber).toFixed(2));
               }
}
calculator(5, '+', 10)