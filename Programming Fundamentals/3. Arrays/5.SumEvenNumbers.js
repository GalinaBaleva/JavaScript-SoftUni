function sumEvenNumbers(array){
               let sum = 0;
               for(let i = 0; i < array.length; i++){
                              let currentNum = Number(array[i]);
                              if(currentNum % 2 === 0){
                                             sum += currentNum;
                              }
               }
               console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);