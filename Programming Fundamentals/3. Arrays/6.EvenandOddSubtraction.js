function evenAndOddSubtraction(array) {
               let evenSum = 0;
               let oddSum = 0;
               // for (let i = 0; i < array.length; i++) { 
               //                let currentNum = Number(array[i]);
               //                if (currentNum % 2 === 0) {
               //                               evenSum += currentNum;
               //                } else {
               //                               oddSum += currentNum;
               //                }
               // }
               for(let num of array){
                              if (num % 2 === 0) {
                                             evenSum += num ;
                              } else {
                                             oddSum += num ;
                              }                      
               }
               let result = evenSum - oddSum;
               console.log(result);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);