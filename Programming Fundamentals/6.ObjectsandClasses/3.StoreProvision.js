function storeProvision(array, arrOrders) {
               let stor = [];
               for (let i = 0; i < array.length - 1; i += 2) {
                              let product = array[i];
                              let quantity = Number(array[i + 1]);
                              let objectProduct = {
                                             product,
                                             quantity,
                              }

                              stor.push(objectProduct);
               };
               for(let i = 0; i < arrOrders.length - 1; i += 2){
                              let product = arrOrders[i];
                              let quantity = Number(arrOrders[i + 1]);
                              let objectProduct = {
                                             product,
                                             quantity,
                              }
                              let index = stor.findIndex(x => x.product === product);
                              if (index >= 0) {
                                             stor[index].quantity += quantity;
                              } else {
                                             stor.push(objectProduct);
                              }
               }
               for(let name of stor){
                 console.log(`${name.product} -> ${name.quantity}`)              
               }
              
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
               ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])