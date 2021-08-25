function balance(input) {
               let index = 0;
               let increase = input[index];
               index++;

               let totalSum = 0;

               while (increase !== "NoMoreMoney") {
                              let inputSum = Number(increase);
                              if (inputSum <= 0){
                                             console.log(`Invalid operation!`);
                                             break;
                              }
                              totalSum += inputSum;
                              console.log(`Increase: ${inputSum.toFixed(2)}`)
                              increase = input[index];
                              index++;    
               }
               console.log(`Total: ${totalSum.toFixed(2)}`)
}

//balance(["5.51", "69.42", "100", "NoMoreMoney"])
balance(["120", "45.55", "-150"])