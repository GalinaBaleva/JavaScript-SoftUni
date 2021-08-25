function cardGame(array) {
               let cardsPower = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
               let players = {};
               let result = {};

               for (let player of array) {

                              let tokens = player.split(': ');
                              let name = tokens.shift();
                              let splitedCards = tokens.toString().split(', ');

                              if (!players.hasOwnProperty(name)) {
                                             players[name] = [];
                              }
                              players[name] = players[name].concat(splitedCards);

               }
               for (let [key, value] of Object.entries(players)) {
                              let current = new Set(value);
                              let cardsSpliting = Array.from(current);
                              let midlleResult = 0;
                              cardsSpliting.forEach(el => {
                                             let tokens = el.split('');
                                             let type = tokens.pop();
                                             let power = tokens.join('');
                                             if (cardsPower.hasOwnProperty(power)) {
                                                            midlleResult += cardsPower[power] * cardsPower[type];
                                             } else {
                                                            midlleResult += Number(power) * cardsPower[type];
                                             }


                              });
                              result[key] = midlleResult;
               }
               for (let [key, value] of Object.entries(result)){
                              console.log(`${key}: ${value}`)
               };
}
cardGame([
               'Peter: 2C, 4H, 9H, AS, QS',
               'Tomas: 3H, 10S, JC, KD, 5S, 10S',
               'Andrea: QH, QC, QS, QD',
               'Tomas: 6H, 7S, KC, KD, 5S, 10C',
               'Andrea: QH, QC, JS, JD, JC',
]);