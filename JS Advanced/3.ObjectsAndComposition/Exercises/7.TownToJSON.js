function townToJSON(array) {
               const pattern = /\s?\|\s?/;
               const [empty, town, latitude, longitude, empty2] = array.shift().split(pattern);
               
               let permResult = [];

               for(let i = 0; i < array.length; i ++){
                              let [empty3, townName, latitudeNum, longitudeNum, empty4] = array[i].split(pattern);

                              let currentObj = {}

                              currentObj[town] = townName;
                              currentObj[latitude] = Number(Number(latitudeNum).toFixed(2));
                              currentObj[longitude] = Number(Number(longitudeNum).toFixed(2));
                              permResult.push(currentObj);
               }

               console.log(JSON.stringify(permResult));
}
townToJSON(['| Town | Latitude | Longitude |',
               '| Sofia | 42.696552 | 23.32601 |',
               '| Beijing | 39.913818 | 116.363625 |']);
townToJSON(['| Town | Latitude | Longitude |',
               '| Veliko Turnovo | 43.0757 | 25.6172 |',
               '| Monatevideo | 34.50 | 56.11 |']);