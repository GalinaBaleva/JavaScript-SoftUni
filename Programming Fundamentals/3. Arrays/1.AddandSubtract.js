function addAndSubtract(array){
               let sumOfArray = 0;
               let sumOfNewArray = 0;
               let newArray = [];

               for(let i = 0; i < array.length; i++){
                              let currentNum = Number(array[i]);
                              sumOfArray += currentNum;

                              if(currentNum % 2 === 0){
                                             let newNumberForArray = currentNum + i
                                             sumOfNewArray += newNumberForArray;
                                             newArray.push(newNumberForArray);
                              }else{
                                             let newNumberForArray = currentNum - i
                                             sumOfNewArray += newNumberForArray;
                                             newArray.push(newNumberForArray);    
                              }

               }
               console.log(`[ ${newArray.join(', ')} ]`);
               console.log(sumOfArray);
               console.log(sumOfNewArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
//addAndSubtract([-5, 11, 3, 0, 2]);