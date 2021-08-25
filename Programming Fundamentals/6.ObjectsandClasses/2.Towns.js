function towns(array) {
               for (let date of array) {
                              let splited = date.split(' | ');

                              let town = splited[0];
                              let latitude = Number(splited[1]).toFixed(2);
                              let longitude = Number(splited[2]).toFixed(2);
                              let townData = {
                                             town,
                                             latitude,
                                             longitude,
                              }
                              console.log(townData);
               }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);