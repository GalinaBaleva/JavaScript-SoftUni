function solve(line) {

               let obj = {};
               while (line != 'EndDay') {
                              let [command, tokens] = line.shift().split(': ');

                              if (command === 'Add') {
                                             let [name, quantity, area] = tokens.split('-');
                                             quantity = Number(quantity);

                                             if (!obj.hasOwnProperty(name)) {
                                                            obj[name] = {
                                                                           quantity,
                                                                           area,
                                                            }
                                             } else {
                                                            obj[name].quantity += quantity;
                                             }
                              } else if (command === 'Feed') {
                                             let [name, food] = tokens.split('-');

                                             if (obj.hasOwnProperty(name)) {
                                                            obj[name].quantity -= food;

                                                            if (obj[name].quantity <= 0) {
                                                                           delete obj[name]
                                                                           console.log(`${name} was successfully fed`);
                                                            }
                                             }
                              }
               }
               let sort = Object.entries(obj).sort((a,b) => {
                              return b[1].quantity - a[1].quantity || a[0].localeCompare(b[0]);
               });
               console.log(`Animals:`);

               let areas = {

               };

               for (let info of sort){
                              console.log(`${info[0]} -> ${info[1].quantity}g`);
                              let location = info[1].area
                              if (!areas.hasOwnProperty(location)){
                                      areas[location] = 1;       
                              } else {
                                             areas[location] += 1;    
                              }
                              
               }
               let sorting = Object.entries(areas).sort((a,b) => {
                              return b[1] - a[1] || a[0].localeCompare(b[0])
               })
               console.log(`Areas with hungry animals:`);

               for (let info of sorting){
                              console.log(`${info[0]}: ${info[1]}`);
               }
               


}
solve(["Add: Adam-4500-ByTheCreek",
               "Add: Maya-7600-WaterfallArea",
               "Add: Maya-1230-WaterfallArea",
               "Feed: Jamie-2000",
               "EndDay"]);
console.log(`---------------------------`)
solve(["Add: Jamie-600-WaterfallArea",
               "Add: Maya-6570-WaterfallArea",
               "Add: Adam-4500-ByTheCreek",
               "Add: Bobbie-6570-WaterfallArea",
               "Feed: Jamie-2000",
               "Feed: Adam-2000",
               "Feed: Adam-2500",
               "EndDay"])
console.log(`---------------------------`)
solve(["Add: Bonie-3490-RiverArea",
               "Add: Sam-5430-DeepWoodsArea",
               "Add: Bonie-200-RiverArea",
               "Add: Maya-4560-ByTheCreek",
               "Feed: Maya-2390",
               "Feed: Bonie-3500",
               "Feed: Johny-3400",
               "Feed: Sam-5500",
               "EndDay"])