function equalArrays(array1, array2) {
               // let indexCount = 0;
               // let sum = 0;
               // let k = 0;
               // for (let i = 0; i < array1.length, k < array2.length; i++, k++) {
               //                let currentINum = Number(array1[i]);
               //                let currentKNum = Number(array2[k]);
               //                indexCount++;
                              
               //                if (currentINum === currentKNum) {
               //                               sum += currentINum;
               //                } else if (currentINum !== currentKNum) {
               //                               console.log(`Arrays are not identical. Found difference at ${indexCount - 1} index`);
               //                               return;
               //                }
               // }
               // console.log(`Arrays are identical. Sum: ${sum}`);


               let sum = 0;

               for (let i = 0; i < array1.length; i++) {

                              if (array1[i] === array2[i]) {
                                             sum += Number(array1[i]);
                              } else if (array1[i] !== array2[i]) {
                                             console.log(`Arrays are not identical. Found difference at ${i} index`);
                                             return;
                              }
               }
               console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);