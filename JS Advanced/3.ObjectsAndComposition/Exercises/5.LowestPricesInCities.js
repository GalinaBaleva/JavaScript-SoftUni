function lowestPriceInCities(array) {
               let permanentResult = {};

               for (let i = 0; i < array.length; i++) {
                              let [town, product, price] = array[i].split(' | ');
                              price = Number(price)
                              if (!permanentResult.hasOwnProperty(product)) {
                                             permanentResult[product] = {};
                              }
                              permanentResult[product][town] = Number(price);
               }

               for (let product of Object.entries(permanentResult)) {
                              let sorted = Object.entries(product[1]).sort((a, b) => a[1] - b[1]);
                              console.log(`${product[0]} -> ${sorted[0][1]} (${sorted[0][0]})`)
               }
}
lowestPriceInCities(['Sample Town | Sample Product | 1000',
               'Sample Town | Orange | 2',
               'Sample Town | Peach | 1',
               'Sofia | Orange | 3',
               'Sofia | Peach | 2',
               'New York | Sample Product | 1000.1',
               'New York | Burger | 10']
);
lowestPriceInCities(['Sofia City | Audi | 100000',
               'Sofia City | BMW | 100000',
               'Sofia City | Mitsubishi | 10000',
               'Sofia City | Mercedes | 10000',
               'Sofia City | NoOffenseToCarLovers | 0',
               'Mexico City | Audi | 1000',
               'Mexico City | BMW | 99999',
               'New York City | Mitsubishi | 10000',
               'New York City | Mitsubishi | 1000',
               'Mexico City | Audi | 100000',
               'Washington City | Mercedes | 1000'
])

                              // if (newObj.hasOwnProperty(product)) {
                              //                if (newObj[product]['price'] > price) {
                              //                               newObj[product][price] = price;
                              //                }
                              // } else {
                              //                newObj = {
                              //                               town,
                              //                               product,
                              //                               price: Number(price),
                              //                }
                              // }