function lastKNumberSequence(n, k) {
               let result = [1];
               for (let i = 1; i < n; i++) {
                              let slicedElements = result.slice(-k);
                              let currentSum = 0

                              for(let num of slicedElements){
                                             currentSum += num;
                              }

                              result.push(currentSum);   
               }
               console.log(result.join(' '));
}
lastKNumberSequence(6, 3)
