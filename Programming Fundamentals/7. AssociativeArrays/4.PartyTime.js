function partyTime(array) {
               let list = {
                              'vipList': [],
                              'regular': []
               }
               let currentGuest = array.shift();
               while (currentGuest !== 'PARTY') {
                              if (currentGuest[0].charCodeAt() >= 48 && currentGuest[0].charCodeAt() <= 59) {
                                             list.vipList.push(currentGuest);
                              } else {
                                             list.regular.push(currentGuest);
                              }
                              currentGuest = array.shift();
               }

               array.forEach(name => {
                              if (list.vipList.includes(name)) {
                                             let i = list.vipList.indexOf(name);
                                             list.vipList.splice(i, 1);
                              } else if (list.regular.includes(name)){
                                             let i = list.regular.indexOf(name);
                                             list.regular.splice(i, 1);
                              }
               });
               
               console.log(list.vipList.length+ list.regular.length);
               console.log(list['vipList'].join('\n'));
               console.log(list['regular'].join('\n'));
}
partyTime(['7IK9Yo0h',
               '9NoBUajQ',
               'Ce8vwPmE',
               'SVQXQCbc',
               'tSzE5t0p',
               'PARTY',
               '9NoBUajQ',
               'Ce8vwPmE',
               'SVQXQCbc'
]);
// partyTime(['m8rfQBvl',
//                'fc1oZCE0',
//                'UgffRkOn',
//                '7ugX7bm0',
//                '9CQBGUeJ',
//                '2FQZT3uC',
//                'dziNz78I',
//                'mdSGyQCJ',
//                'LjcVpmDL',
//                'fPXNHpm1',
//                'HTTbwRmM',
//                'B5yTkMQi',
//                '8N0FThqG',
//                'xys2FYzn',
//                'MDzcM9ZK',
//                'PARTY',
//                '2FQZT3uC',
//                'dziNz78I',
//                'mdSGyQCJ',
//                'LjcVpmDL',
//                'fPXNHpm1',
//                'HTTbwRmM',
//                'B5yTkMQi',
//                '8N0FThqG',
//                'm8rfQBvl',
//                'fc1oZCE0',
//                'UgffRkOn',
//                '7ugX7bm0',
//                '9CQBGUeJ'
// ]
// );