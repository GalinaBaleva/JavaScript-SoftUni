// function oddAndEvenSum(number) {
//                let stringNumber = number.toString();
//                let oddSum = 0;
//                let evenSum = 0;
//                for (let i = 0; i < stringNumber.length; i++) {
//                               let splitedNum = Number(stringNumber[i]);
//                               if (splitedNum % 2 === 0) {
//                                              evenSum += splitedNum;
//                               } else {
//                                              oddSum += splitedNum;
//                               }
//                }
//                let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
//                return result;
// }
// let result = oddAndEvenSum(3495892137259234);
// console.log(result);

function oddAndEvenSum(number) {
               let stringNumber = number.toString();
               let oddSum = 0;
               let evenSum = 0;
               for (let digit of stringNumber) {
                              
                              if (Number(digit) % 2 === 0) {
                                             evenSum += Number(digit);
                              } else {
                                             oddSum += Number(digit);
                              }
               }
               let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
               return result;
}
let result = oddAndEvenSum(3495892137259234);
console.log(result);