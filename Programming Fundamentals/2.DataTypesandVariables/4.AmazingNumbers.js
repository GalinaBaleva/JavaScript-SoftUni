function amazingNumber(num){
               let sum = 0;
               num = num.toString()
               for(let i = 0; i < num.length; i++ ){
                              let currentNumber = Number(num[i]);
                              sum += currentNumber;
               }
               let result = sum.toString().includes('9');
               console.log(result
                              ? `${num} Amazing? True`
                              : `${num} Amazing? False`);
               // if(sum % 10 === 9){
               //                console.log(`${num} Amazing? True`)
               // } else {
               //                console.log(`${num} Amazing? False`)      
               // }
               
}
amazingNumber(1233);
amazingNumber(999);