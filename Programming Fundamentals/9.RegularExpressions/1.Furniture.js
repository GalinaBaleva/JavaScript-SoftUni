function furniture(string) {
               let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)\!(?<quantity>\d+)/;
               let total = 0;

               console.log(`Bought furniture:`);

               while (string[0] != 'Purchase') {
                              let current = string.shift();
                              let match = pattern.exec(current);

                              if (match != null) {
                                             let { name, price, quantity } = match.groups;
                                             console.log(name)
                                             total += price * quantity;
                              }
               }
               console.log(`Total money spend: ` + total.toFixed(2));
}
furniture(['>>Sofa<<312.23!3',
               '>>TV<<300!5',
               '>Invalid<<!5',
               'Purchase']);