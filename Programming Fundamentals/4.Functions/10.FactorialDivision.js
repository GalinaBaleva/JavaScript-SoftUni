function factorialDivision(num1, num2){
               function factorialOfNum(num){
                              let temp = 1;
                              for(let i = 0; i <= num; i++){
                                             let current = Number(i);
                                             if(current === 0){
                                                            current = 1;
                                             }
                                             let currentSum = current * temp;
                                             temp = currentSum;
                              }
                              return temp;
               }
               let sumNum1 = factorialOfNum(num1);
               let sumNum2 = factorialOfNum(num2);
               let result = sumNum1 / sumNum2;
               return result.toFixed(2);
}
let result = factorialDivision(6, 2);
console.log(result);