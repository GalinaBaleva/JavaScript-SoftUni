// function destinationMapper(stringLine) {
//                let pattern = /([=/])([A-Z][A-Za-z]{2,})\1/g;
               

//                let result = stringLine.match(pattern);

//                if (result == null) {
//                               console.log(`Destinations:  `);
//                               console.log(`Travel Points: 0`);
//                } else {
//                               let total = [];
//                               let totalLetters = 0

//                               for (let destination of result) {
//                                              let current = destination;
//                                              totalLetters += current.length - 2;
//                                              total.push(current.slice(1, current.length - 1));
                                             

//                               }
//                               console.log(`Destinations: ${total.join(', ')}`);
//                               console.log(`Travel Points: ${totalLetters}`);
//                }

// }
function destinationMapper(stringLine) {
               let pattern = /([=/])([A-Z][A-Za-z]{2,})\1/g;
               let pattern2 = /([=|\/])/g

               let result = stringLine.match(pattern);

               if (result == null) {
                              console.log(`Destinations:  `);
                              console.log(`Travel Points: 0`);
               } else {
                              let total = [];
                              let totalLetters = 0

                              for (let destination of result) {
                                             let current = destination.replace(pattern2, '');

                                             total.push(current)
                                             totalLetters += current.length;

                              }
                              console.log(`Destinations: ${total.join(', ')}`);
                              console.log(`Travel Points: ${totalLetters}`);
               }

}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');