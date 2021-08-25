function reverseAnArrayofNumbers(n, array){
               // let result = [];
               // for (let i = 0; i < n; i++){
               //               result.push(array[i]);
               // }
               // let finalResult = [];
               // for(let j = result.length-1; j >= 0; j--){
               //                finalResult.push(result[j]);
               // }

               let finalResult = [];
               for(let i = n-1; i >= 0; i--){
                              finalResult.push(array[i]);
               }
               // let string = '';
               // for(let i = 0; i < finalResult.length; i++){
               //                string += finalResult[i];
               //                if(i < finalResult.length -1){
               //                               string += ' ';
               //                }
               // }
               // console.log(string);

               console.log(finalResult.join(' '))
}
reverseAnArrayofNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayofNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayofNumbers(2, [66, 43, 75, 89, 47]);