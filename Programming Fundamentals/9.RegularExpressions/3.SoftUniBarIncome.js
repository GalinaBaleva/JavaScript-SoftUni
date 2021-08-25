function softUniBarIncome(input) {
               let pattern = /%(?<costomer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/;

               let total = 0;

               while (input[0] != 'end of shift') {
                              let current = input.shift();

                              let match = pattern.exec(current);

                              if (match != null) {
                                             let {_, costomer, product, count, price} = match.groups;
                                             count = Number(count);
                                             price = Number(price);
                                              
                                             total += count * price;
                                             console.log(`${costomer}: ${product} - ${(count*price).toFixed(2)}`);
                              }
               }
               console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome(["%George%<Croissant>|2|10.3$",
               "%Peter%<Gum>|1|1.3$",
               "%Maria%<Cola>|1|2.4$",
               "end of shift"]);
softUniBarIncome(["%InvalidName%<Croissant>|2|10.3$",
               "%Peter%<Gum>1.3$",
               "%Maria%<Cola>|1|2.4",
               "%Valid%<Valid>valid|10|valid20$",
               "end of shift"]);