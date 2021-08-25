function equalSums(input) {
               let firstNum = Number(input[0]);
               let lastNum = Number(input[1]);

               let printLine = "";

               for (let i = firstNum; i <= lastNum; i++) {
                              let currentStringNum = "" + i;

                              let sumEven = 0;
                              let sumOdd = 0;
                              for (let j = 0; j <= currentStringNum.length; j++) {
                                             let currentNum = Number(currentStringNum.charAt(j));
                                             if (j % 2 === 0) {
                                                            sumEven += currentNum;
                                             } else {
                                                            sumOdd += currentNum
                                             }
                              }
                              if (sumEven === sumOdd) {
                                             printLine += `${i} `;
                              }
               }
                          console.log(printLine);
}
equalSums(["100000", "100050"])
equalSums(["100115",
"100120"])