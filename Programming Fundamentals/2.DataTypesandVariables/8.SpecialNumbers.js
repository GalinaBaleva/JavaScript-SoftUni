function specialNumbers(num){
               for(let i = 1; i<= num; i++){
                              if(parseInt(i) === 5 || parseInt(i) === 7 || parseInt(i) === 11){
                                             console.log(`${i} -> True`);
                              } else {
                                             console.log(`${i} -> False`);
                              }
               }
}
specialNumbers(15);
