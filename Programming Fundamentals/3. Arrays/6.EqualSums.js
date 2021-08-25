function equalSums(array) {

               let isTrue = true;

               let currentINumber = 0;

               for (let i = 0; i < array.length; i++) {
                              currentINumber = i;

                              let firstSum = 0;
                              let secondSum = 0;
                              for (let j = 0; j < i; j++) {
                                             let currentJNum = Number(array[j]);
                                             firstSum += currentJNum;
                              }
                              for (let k = i + 1; k < array.length; k++) {
                                             let currentKNum = Number(array[k]);
                                             secondSum += currentKNum;
                              } if (firstSum !== secondSum) {
                                             isTrue = false;
                              } else {
                                             isTrue = true;
                                             currentINumber = i;
                                             break;
                              }
               }
               if (isTrue) {
                              console.log(currentINumber);
               } else {
                              console.log(`no`);
               }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);