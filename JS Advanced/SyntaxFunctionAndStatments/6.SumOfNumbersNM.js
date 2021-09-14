function sumOfNumbers(n, m){
               n = Number(n);
               m = Number(m);
               let sum = 0;
               for(let i = n; i <= m; i++){
                              sum += i;
               }
               console.log(sum);
}
sumOfNumbers('1', '5' );
sumOfNumbers('-8', '20');