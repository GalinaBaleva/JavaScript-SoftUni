function barcodeGenerator(input) {
               let firstNum = input[0];
               let secondNumb = input[1];

               let barcodsNum = "";

               for (let i = Number(firstNum[0]); i <= Number(secondNumb[0]); i++) {
                              for (let j = Number(firstNum[1]); j <= Number(secondNumb[1]); j++) {
                                             for (let k = Number(firstNum[2]); k <= Number(secondNumb[2]); k++) {
                                                            for (let l = Number(firstNum[3]); l <= Number(secondNumb[3]); l++) {
                                                                           if (i % 2 === 1 && j % 2 === 1 && k % 2 === 1 && l % 2 === 1){
                                                                                          barcodsNum += `${i}${j}${k}${l} `
                                                                           }
                                                            }
                                             }
                              }
               }
               console.log(barcodsNum);
}
// barcodeGenerator(["2345", "6789"])
// barcodeGenerator(["3256", "6579"])
barcodeGenerator(["1365", "5877"])