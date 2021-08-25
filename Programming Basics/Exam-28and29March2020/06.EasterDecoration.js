function easterDecoration(input) {
               let index = 0;
               let numOfCients = Number(input[index++]);

               let totalSum = 0;

               for (let i = 1; i <= numOfCients; i++) {
                              let product = input[index];

                              let totalProductsClient = 0;
                              let clientsSum = 0;
                              while (product !== "Finish") {
                                             let currentProduct = product;
                                             if (currentProduct === "basket") {
                                                            totalProductsClient++;
                                                            clientsSum += 1.5;
                                             } else if (currentProduct === "wreath") {
                                                            totalProductsClient++;
                                                            clientsSum += 3.80;
                                             } else if (currentProduct === "chocolate bunny") {
                                                            totalProductsClient++;
                                                            clientsSum += 7;
                                             }
                                             index++;
                                             product = input[index];
                              }
                              if (totalProductsClient % 2 === 0) {
                                             clientsSum = clientsSum - (clientsSum * 0.2);
                              }
                              totalSum += clientsSum;
                              index++;
                              console.log(`You purchased ${totalProductsClient} items for ${clientsSum.toFixed(2)} leva.`)
               }
               console.log(`Average bill per client is: ${(totalSum / numOfCients).toFixed(2)} leva.`)
}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])
//easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"])
