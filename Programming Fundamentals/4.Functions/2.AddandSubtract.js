// function addAndSubtract(num1, num2, num3){
//                let result = subtract(num3);
//                console.log(result)
//                function sum(num1, num2){
//                               let sum = num1 + num2;
//                               return sum;
//                }
//                function subtract(num3){
//                               let result = sum(num1, num2) - num3;
//                               return result;
//                }
// }
// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);
// addAndSubtract(42, 58, 100);

function addAndSubtract(num1, num2, num3){
               function sum(num1, num2){
                              let result = num1 + num2;
                              return result;
               }
               function subtract(num1, num2){
                              let result = num1 - num2;
                              return result;
               }
               let numberSum = sum(num1, num2);
               let result = subtract(numberSum, num3);
               return result;
}
let result = addAndSubtract(23, 6, 10);
console.log(result);