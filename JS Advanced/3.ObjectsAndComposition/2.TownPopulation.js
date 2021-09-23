function townPopulation(arr) {
               let obj = {};

               for(let i = 0; i < arr.length; i++){
                              let [town, population] = arr[i].split(' <-> ');
                              population = Number(population);

                              if(!obj.hasOwnProperty(town)){
                                             obj[town] = population;
                              } else {
                                             obj[town] += population;
                              }
               }

               for (let [town, population] of Object.entries(obj)){
                              console.log(`${town} : ${population}`);
               }
}
townPopulation(['Sofia <-> 1200000',
               'Montana <-> 20000',
               'New York <-> 10000000',
               'Washington <-> 2345000',
               'Las Vegas <-> 1000000']
);
townPopulation(['Istanbul <-> 100000',
               'Honk Kong <-> 2100004',
               'Jerusalem <-> 2352344',
               'Mexico City <-> 23401925',
               'Istanbul <-> 1000']);
