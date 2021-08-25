function worldTour(list) {
               let result = list.shift();


               while (list != 'Travel') {

                              let [command, token, token2] = list.shift().split(':');

                              if (command === 'Add Stop') {

                                             if (token >= 0 && token < result.length) {
                                                            let leftPart = result.substring(0, token);
                                                            let rightPart = result.substring(token);

                                                            result = leftPart + token2 + rightPart;
                                             }
                                             console.log(result);
                              } else if (command === 'Remove Stop') {
                                             if (token >= 0 && token < result.length && token2 >= 0 && token2 < result.length) {
                                                            let endIndex = Number(token2) + 1;
                                                            let leftPart = result.substring(0, token);
                                                            let rightPart = result.substring(endIndex)
                                                            
                                                            result = leftPart + rightPart;
                                             }
                                             console.log(result);
                              } else if (command === 'Switch') {
                                             let pattern = new RegExp(token, 'g');
                                             if (result.indexOf(token) >= 0 && result.indexOf(token) < result.length) {

                                                            result = result.replace(pattern, token2);

                                             }
                                             console.log(result);
                              }
               }
               console.log(`Ready for world tour! Planned stops: ${result}`)
}
worldTour(['Hawai::Cyprys-Greece:Hawai',
               'Add Stop:7:Rome',
               'Remove Stop:11:16',
               'Switch:Hawai:Bulgaria',
               'Switch:Hungary:Bulgaria',
               'Travel']);