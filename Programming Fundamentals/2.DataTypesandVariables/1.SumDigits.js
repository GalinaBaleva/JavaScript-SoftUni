function sumDigits(num){
               num = num.toString();
               let sum = 0;
               for(let i = 0; i < num.length; i++){
                              let current = Number(num[i]);
                              sum += current;
               }
               console.log(sum)

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);