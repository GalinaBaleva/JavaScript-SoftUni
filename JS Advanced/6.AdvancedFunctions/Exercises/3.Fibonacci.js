function getFibonator(){
               let firstNum = 1;
               let secondNum = 0;

               function calculator () {
                              let sum = firstNum + secondNum;
                              firstNum = secondNum;
                              secondNum = sum;
                              return sum;
               }
               return calculator;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13