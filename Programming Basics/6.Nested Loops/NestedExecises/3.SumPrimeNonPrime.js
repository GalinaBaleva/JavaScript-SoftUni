function sumPrimeNonPrime(input) {
               let index = 0;
               let primeNum = 0;
               let nonPrimeNum = 0;

               while (input[index] !== "stop") {
                              let currentNum = Number(input[index]);
                              if (currentNum < 0) {
                                             console.log(`Number is negative.`);
                              } else {
                                             let isPrime = true;
                                             for (let i = 2; i < currentNum; i++) {
                                                            if (currentNum % i === 0) {
                                                                           isPrime = false;
                                                                           break;
                                                            }
                                             }
                                             if(isPrime){
                                                            primeNum += currentNum;
                                             } else {
                                                            nonPrimeNum += currentNum;
                                             }
                              }
                              index++;
               }
               console.log(`Sum of all prime numbers is: ${primeNum}`);
               console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`)
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]) 
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"])
sumPrimeNonPrime(["0", "-9", "0", "stop"])
