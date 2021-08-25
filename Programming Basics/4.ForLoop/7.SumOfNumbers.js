function sumOfNumbers(input) {
               let numbersInput = input[0];
               let outputSum = 0;

               for (let i = 0; i < numbersInput.length; i++) {
                              let n = Number(numbersInput[i]);
                              outputSum += n;

               }
               console.log(`The sum of the digits is:${outputSum}`);
}
sumOfNumbers(["1234"])
sumOfNumbers(["564891"])