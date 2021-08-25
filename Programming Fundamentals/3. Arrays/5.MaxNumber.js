function maxNumber(list) {
               let newList = [];

               for (let i = 0; i < list.length; i++) {
                              let currentNumber = Number(list[i]);
                              let isTrue = true;
                              for (let j = i + 1; j < list.length; j++) {
                                             let currentNumJ = Number(list[j]);
                                             if (currentNumJ >= currentNumber) {
                                                            isTrue = false;
                                                            break;
                                             }
                              }
                              if(isTrue){
                                             newList.push(currentNumber);
                              }
               }
               console.log(newList.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);