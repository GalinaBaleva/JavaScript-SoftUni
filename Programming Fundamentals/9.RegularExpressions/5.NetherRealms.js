// function netherReal(input) {
//                let patternSplit = /[, ]+/g
//                let splitedArr = input.split(patternSplit)
//                let patternForHealth = /[^\d+\-*/\.]/;
//                let patternForDamage = /([+|-]?\d+(?:\.\d+)?)/g;

//                let resultObj = {};

//                for (let demon of splitedArr) {
//                               let charSpliting = demon.split('');
//                               let letters = charSpliting.filter(x => patternForHealth.exec(x));
//                               let asciiArr = [];
//                               letters.forEach(el => {
//                                              el = el.charCodeAt();
//                                              asciiArr.push(el);
//                               });
//                               let health = asciiArr.reduce((x, y) => x + y);

//                               let numbers = demon.match(patternForDamage);
//                               let damage = 0;
//                               if (numbers != null) {
//                                              let numbersSum = numbers.map(Number).reduce((x, y) => x + y);
//                                              let multOrDiciding = charSpliting.forEach(x => {
//                                                             if (x === '*') {
//                                                                            numbersSum *= 2;
//                                                             } else if (x === '/') {
//                                                                            numbersSum /= 2;
//                                                             }
//                                              });
//                                              damage = numbersSum;
//                               } else {
//                                              damage = 0;
//                               }
//                               resultObj[demon] = [health, damage];

//                }
//                let result = Object.entries(resultObj).sort((a, b) => a[0].localeCompare(b[0]));

//                for (let info of result){
//                               let name = info[0];
//                               let health = info[1][0];
//                               let damage = info[1][1];
//                               console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`)
//                } 
// }

function netherRealms(text) {

               let demons = text.split(/,\s*/).sort((a, b) => a.localeCompare(b));

               for (let demon of demons) {
                              if (demon.includes(' ') == false) {
                                             console.log(`${demon} - ${health(demon)} health, ${damage(demon)} damage`);
                              }
               }
               //calculate demon health
               function health(string) {
                              let pattern = /[^0-9+\-*,\/.]+/g;
                              let result = string.replace(pattern, '')
                                             .split('')
                                             .map(x => x.charCodeAt(0));
                              if (result.length > 0) {
                                             result = result.reduce((a, b) => a + b);
                                             return result;
                              }
               }
               //                let patternForHealth = /[^\d+\-*/\.]/;
               //                let patternForDamage = /([+|-]?\d+(?:\.\d+)?)/g;
               //calculate demon damage
               function damage(string) {
                              let pattern = /[+|-]?[0-9\.]+/gm;
                              let simbols = /[0-9]([*\/]+)/g
                              let numbers = string.match(pattern);
                              let result = 0;
                              if (numbers != null) {
                                             result = numbers.map(Number).reduce((a, b) => a + b);
                              }
                              let match = simbols.exec(string);
                              while (match != null) {
                                             let elements = match[1].split('');
                                             for (let action of elements) {
                                                            if (action == '*') {
                                                                           result *= 2;
                                                            } else {
                                                                           result /= 2;
                                                            }
                                             }
                                             match = simbols.exec(string);
                              }
                              return result.toFixed(2);
               }
}
netherRealms(`M3ph-0.5s-0.5t0.0**`);
netherRealms(`M3ph1st0**, Azazel, ] fgfg`);
netherRealms(`Gos/ho`);

// netherReal('M3ph-0.5s-0.5t0.0**');
// netherReal('M3ph1st0**, Azazel');
// netherReal('Gos/ho');
// netherReal('m15*/c-5.0');