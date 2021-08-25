function perfectNumber(num) {
               function perfectChecker(num) {
                              let sum = 0;
                              for (let i = 1; i < num; i++) {
                                             if (num % Number(i) === 0) {
                                                            sum += Number(i);
                                             }
                              }
                              return sum;
               }

               if (perfectChecker(num) === num) {
                              return `We have a perfect number!`;
               } else {
                              return `It's not so perfect.`;
               }
}

let result = perfectNumber(1236498);
console.log(result);