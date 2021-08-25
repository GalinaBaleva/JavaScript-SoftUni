function storage(input) {
               let map = new Map();

               for (let item of input) {
                              let [product, quantity] = item.split(' ');
                              quantity = Number(quantity);
                              if (!map.has(product)) {
                                             map.set(product, Number(quantity));
                              } else {
                                             let currentQuantity = Number(map.get(product));
                                             let futureQuantity = currentQuantity + quantity;
                                             map.set(product, futureQuantity);
                              }
               }
               for (let [key, value] of map.entries()) {
                              console.log(`${key} -> ${value}`)
               }
}
storage(['tomatoes 10',
               'coffee 5',
               'olives 100',
               'coffee 40']);