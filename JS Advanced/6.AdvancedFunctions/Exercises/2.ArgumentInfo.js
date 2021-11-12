function argumentFunction(...input){
               let typesObj = {};
               for(let info of input){
                              let type = typeof info;
                              if(!typesObj[type]){
                                             typesObj[type] = [];
                              }
                              typesObj[type].push(info);
                              console.log(`${type}: ${info}`)
               }
               let allInfoOfObj = Object.entries(typesObj).sort((a, b) => b[1].length - a[1].length).forEach(el => console.log(`${el[0]} = ${el[1].length}`));

}
// function argumentInfo() {
//                let typeCounts = {};
//                for (let arg of arguments) {
//                               console.log(`${typeof (arg)}: ${arg}`);
//                               if (!typeCounts[typeof (arg)]) {
//                                              typeCounts[typeof (arg)] = 1;
//                               } else {
//                                              typeCounts[typeof (arg)]++;
//                               }
//                }

//                Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
// }
argumentFunction({ name: 'bob' }, 3.333, 9.999)