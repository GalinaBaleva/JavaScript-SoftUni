function operationBetweenNumbers(input) {

               let firstNumber = Number(input[0]);
               let secondNumber = Number(input[1]);
               let operator = input[2];

               let result = 0;

               switch (operator) {
                              case "+":
                                             result = firstNumber + secondNumber;
                                             if (result % 2 === 0) {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber + secondNumber} - even`); break;

                                             } else {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber + secondNumber} - odd`); break;
                                             }

                              case "-":
                                             result = firstNumber - secondNumber;
                                             if (result % 2 === 0) {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber - secondNumber} - even`); break;
                                             } else {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber - secondNumber} - odd`); break;
                                             }
                              case "*":
                                             result = firstNumber * secondNumber;
                                             if (result % 2 === 0) {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber * secondNumber} - even`); break;
                                             } else {
                                                            console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber * secondNumber} - odd`); break;
                                             }
               }
               if (operator === "/") {
                              if (secondNumber == "0") {
                                             console.log(`Cannot divide ${firstNumber} by zero`);
                              } else {
                                             result = firstNumber / secondNumber;
                                             console.log(`${firstNumber} / ${secondNumber} = ${(result).toFixed(2)}`);
                              }
               } else if (operator === "%") {
                              if (secondNumber == "0") {
                                             console.log(`Cannot divide ${firstNumber} by zero`);
                              } else {
                                             console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber % secondNumber}`);
                              }
               }
}
operationBetweenNumbers(["10", "12", "+"])
operationBetweenNumbers(["10", "1", "-"])
operationBetweenNumbers(["7", "3", "*"])
operationBetweenNumbers(["123", "12", "/"])
operationBetweenNumbers(["10", "3", "%"])
operationBetweenNumbers(["112", "0", "/"])
operationBetweenNumbers(["10", "0", "%"])