function plantDiscovery(input) {
  let n = Number(input[0]);
  let plantsObj = {};

  let pattern = /: /g;
  let pattern2 = / - /g

  for (let i = 1; i <= n; i++) {
    let [name, rarity] = input[i].split('<->');
    rarity = Number(rarity)

    plantsObj[name] = {
      rarity,
      rating: [],
      avRating: 0
    };
  }
  let index = n + 1;

  while (input[index] != 'Exhibition') {
    let current = input[index].split(': ');
    let command = current[0];
    let [name, rt] = current[1].split(' - ');
    if (plantsObj.hasOwnProperty(name)) {
      if (command === 'Rate') {

        rt = Number(rt);
        plantsObj[name].rating.push(rt);
        if (plantsObj[name].rating.length > 1) {
          let sum = plantsObj[name].rating.reduce((a, b) => {
            return a + b;
          });
          let total = sum / plantsObj[name].rating.length;
          plantsObj[name].avRating = total;
        } else {
          plantsObj[name].avRating = rt;
        }



      } else if (command === 'Update') {
        rt = Number(rt);
        plantsObj[name].rarity = rt;
      } else if (command === 'Reset') {
        let name = current[1];
        let splice = plantsObj[name].rating.splice(0);

        plantsObj[name].avRating = 0;
      } else {
        console.log('error');
      }
    } else {
      console.log('error');
    }
    index++;
    current = input[index];
  }

  let sorted = Object.keys(plantsObj).sort(function (a, b) {
  
    return plantsObj[b].rarity - plantsObj[a].rarity || plantsObj[b].avRating - plantsObj[a].avRating;
  });
  console.log(`Plants for the exhibition:`)
  for (let info of sorted) {

    let rarity = plantsObj[info].rarity
    let avRating = plantsObj[info].avRating;

    console.log(`- ${info}; Rarity: ${rarity}; Rating: ${(avRating).toFixed(2)}`)
  }
}
plantDiscovery([3,
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition']);
console.log(`-----------------------`);
// plantDiscovery([3,
//                'Arnoldii<->4',
//                'Woodii<->7',
//                'Welwitschia<->7',
//                'Rate: Woodii - 10',
//                'Rate: Welwitschia - 7',
//                'Rate: Arnoldii - 3',
//                'Rate: Woodii - 5',
//                'Reset: Arnoldii',
//                'Exhibition']);
console.log(`-----------------------`);
plantDiscovery([2,
  'Candelabra<->10',
  'Oahu<->10',
  'Rate: Oahu - 7',
  'Rate: Candelabra - 6',
  'Exhibition']);

// function printInfo(input) {
//                let plantCount = Number(input.shift());
//                let plantCollection = {};

//                for (let i = 0; i < plantCount; i++) {
//                               let line = input.shift();
//                               let [plant, rarity] = line.split('<->');
//                               rarity = Number(rarity);
//                               plantCollection[plant] = { rarity, rating: [] };
//                }

//                let line = input.shift();
//                while (line !== 'Exhibition') {
//                               let [command, ...rest] = line.split(': ');
//                               let [plant, data] = rest[0].split(' - ');
//                               if (plantCollection.hasOwnProperty(plant)) {
//                                              switch (command) {
//                                                             case 'Rate': {
//                                                                            let rating = Number(data);
//                                                                            plantCollection[plant].rating.push(rating);
//                                                                            break;
//                                                             }
//                                                             case 'Update': {
//                                                                            let newRarity = Number(data);
//                                                                            plantCollection[plant].rarity = newRarity;
//                                                                            break;
//                                                             }
//                                                             case 'Reset': {
//                                                                            plantCollection[plant].rating = [];
//                                                                            break;
//                                                             }
//                                                             default:
//                                                                            console.log('error');
//                                                                            break;
//                                              }
//                               } else {
//                                              console.log('error');
//                               }
//                               line = input.shift();
//                }

//                let sortedPlants = Object.keys(plantCollection).sort(
//                               (a, b) =>
//                                              plantCollection[b].rarity - plantCollection[a].rarity ||
//                                              average(plantCollection[b].rating) - average(plantCollection[a].rating)
//                );

//                console.log(`Plants for the exhibition:`);

//                for (let plant of sortedPlants) {
//                               console.log(`- ${plant}; Rarity: ${plantCollection[plant].rarity}; Rating: ${average(plantCollection[plant].rating).toFixed(2)}`);
//                }

//                function average(arr) {
//                               if (!arr.length) return 0;
//                               return arr.reduce((a, b) => a + b, 0) / arr.length;
//                }
// }