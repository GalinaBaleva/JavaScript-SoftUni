function maxSequenceOfEqualElements(array) {
               let linesKeeper =[];
               let leftesEqual = [];

               let isTrue = true;
               for (let i = 0; i < array.length; i++) {
                              let currentINumber = array[i];
                              let numbersKeeper = [currentINumber];
                              
                              for (let j = i + 1; j < array.length; j++) {
                                             let currentJNum = array[j];
                                             if (currentINumber === currentJNum) {
                                                            
                                                            numbersKeeper.push(currentJNum);
                                                            
                                                            isTrue = true;
                                             } else{
                                                            isTrue = false;
                                                            break;
                                             }
                              }
                              if(numbersKeeper.length >= 2){
                              
                                             if(linesKeeper.length < numbersKeeper.length){
                                                            linesKeeper = numbersKeeper; 
                                             }
                                             if(leftesEqual.length === 0){
                                                            leftesEqual = numbersKeeper; 
                                             }

                              }

               }
               if(linesKeeper > leftesEqual){
                              console.log(linesKeeper.join(' '))
               } else{
                              console.log(leftesEqual.join(' '))
               }

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);