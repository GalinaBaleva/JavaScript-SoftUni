function solve(line) {
               let n = Number(line.shift());
               let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;


               for (let i = 0; i < n; i++) {
                              let current = pattern.exec(line[i]);
                              
                              if (current == null) {
                                             console.log(`Access denied!`)
                                             continue;
                              } else {
                                             let boss = current.groups.boss;
                                             let title = current.groups.title;

                                             console.log(`${boss}, The ${title}`);
                                             console.log(`>> Strength: ${boss.length}`);
                                             console.log(`>> Armor: ${title.length}`);
                              }

               }

}
// solve(['3',
//                '|PETER|:#Lead architect#',
//                '|GEORGE|:#High Overseer#',
//                '|ALEX|:#Assistant Game Developer#']);

console.log(`---------------------------`)
solve(['3',
               '|STEFAN|:#H1gh Overseer#',
               '|IVAN|:#Master detective#',
               '|KARL|: #Marketing lead#'])

               // let valid = Object.entries(obj);
               // if (valid.length > 0) {
               //                for (let info of Object.entries(obj)) {
               //                               let [boss, title] = info;


               //                }
               // } else {

               // }