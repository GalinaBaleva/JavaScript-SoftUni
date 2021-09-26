function storeCatalogue(array) {
               const catalogueOfProducts = {};

               for (let i = 0; i < array.length; i++) {
                              let [product, price] = array[i].split(' : ');
                              price = Number(price);
                              let leter = product[0];

                              if (!catalogueOfProducts.hasOwnProperty(leter)) {
                                             catalogueOfProducts[leter] = {};
                              }
                              catalogueOfProducts[leter][product] = price;
               }
               let sortedLeters = Object.entries(catalogueOfProducts).sort((a, b) => a[0].localeCompare(b[0]))
               for(let info of sortedLeters){
                              let sorting = Object.entries(info[1]).sort((a,b) => a[0].localeCompare(b[0]));
                              console.log(info[0]);
                              for(let prod of sorting){
                                             console.log(`  ${prod[0]}: ${prod[1]}`);
                              }
               }
}
storeCatalogue(['Appricot : 20.4',
               'Fridge : 1500',
               'TV : 1499',
               'Deodorant : 10',
               'Boiler : 300',
               'Apple : 1.25',
               'Anti-Bug Spray : 15',
               'T-Shirt : 10']);
               console.log(`--------------`)
storeCatalogue(['Banana : 2',
               'Rubic\'s Cube : 5',
               'Raspberry P : 4999',
               'Rolex : 100000',
               'Rollon : 10',
               'Rali Car : 2000000',
               'Pesho : 0.000001',
               'Barrel : 10']);