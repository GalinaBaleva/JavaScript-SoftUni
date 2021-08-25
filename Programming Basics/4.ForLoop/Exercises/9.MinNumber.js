function minNumber(input) {
               let countOfNumbers = Number(input[0]);
               let numMin = Number.MAX_SAFE_INTEGER;

               for (let i = 1; i <= countOfNumbers; i++) {

                              let numbersFromInput = Number(input[i]);
                              if (numbersFromInput < numMin) {
                                             numMin = numbersFromInput;
                              }
               }
               console.log(numMin)
}
minNumber(["2", "100", "99"])
minNumber(["3", "-10", "20", "-30"])
minNumber(["4", "45", "-20", "7", "99"])
minNumber(["1", "999"])
minNumber(["2", "-1", "-2"])