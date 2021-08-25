// function palindromeIntegers(array) {

//                for (let i = 0; i < array.length; i++) {
//                               let currentArrNumber = array[i].toString();
//                               let reversedArr = [];
//                               let palindromeNum = '';
//                               for (let j = currentArrNumber.length - 1; j >= 0; j--) {
//                                              let currentNum = currentArrNumber[j];
//                                              reversedArr.push(currentNum);
//                               }
//                               let reversedNum = reversedArr.join('');
//                               if (currentArrNumber === reversedNum) {
//                                              palindromeNum += true;
//                               } else {
//                                              palindromeNum += false;
//                               }
//                               console.log(palindromeNum);
//                }
// }
// palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);


// function palindromeIntegers(array) {

//                for (let i = 0; i < array.length; i++) {
//                               let currentArrNumber = array[i].toString();
//                               let arrForReverse = [];
//                               let palindromeNum = '';
//                               for (let j = 0; j < currentArrNumber.length; j++) {
//                                              let currentNum = currentArrNumber[j];
//                                              arrForReverse.push(currentNum);
//                               }
//                               let revArr = arrForReverse.reverse();
//                               let reversedNum = revArr.join('');

//                               if (currentArrNumber === reversedNum) {
//                                              palindromeNum = true;
//                               } else {
//                                              palindromeNum = false;
//                               }
//                               console.log(palindromeNum);
//                }
// }
// palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);