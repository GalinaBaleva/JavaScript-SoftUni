function greatestCommonDivisor(num1, num2){
               let min = Math.min(num1, num2);
               let max = Math.max(num1, num2);

               let GCD = 0;


               for(let i  = 0; i <= max; i++){
                              if(min % i === 0 && max % i === 0){
                                             GCD = i;
                              }
               }
               console.log(GCD);
           
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);