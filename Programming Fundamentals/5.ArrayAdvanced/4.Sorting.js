function sorting(arrNumbers){
               let arrayLength = arrNumbers.length;
               let newArray = [];
               for(let i = 0; i < arrayLength; i++){
                              let number;
                              if(i % 2 === 0){
                                             number = Math.max(...arrNumbers);
                              } else {
                                             number = Math.min(...arrNumbers);
                              }
                              newArray.push(number);
                              
                              arrNumbers.splice(arrNumbers.indexOf(number), 1);
               }
               console.log(newArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);