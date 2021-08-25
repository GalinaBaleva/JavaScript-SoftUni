function factorial(input){

               let factorialNumber = Number(input[0]);

               let sum = 1;
               for( let i = 1; i <= factorialNumber; i++){
                              sum *= i;
               }
               console.log(sum)
}
factorial(["4"])
factorial(["8"])