function loadingBar(num) {
               function checkerOfLoading(num) {
                              let result = '[';
                              for (let i = 1; i <= 10; i++) {
                                             let newNum = Number(num / 10);
                                             if (Number(i) <= newNum) {
                                                            result += '%';
                                             } else {
                                                            result += '.'
                                             }
                                             if (Number(i === 10)) {
                                                            result += ']';
                                             }
                              }
                              return result;
               }

               if (num < 100) {
                              console.log(`${num}% ${checkerOfLoading(num)}`);
                              console.log(`Still loading...`)
               } else {
                              console.log(`${num}% Complete!`);
                              console.log(`${checkerOfLoading(num)}`);
               }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);