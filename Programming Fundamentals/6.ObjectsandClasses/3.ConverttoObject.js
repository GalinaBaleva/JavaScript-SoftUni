function printKeys(obj) {//from json
               let objToWork = JSON.parse(obj);
               for (let key of Object.keys(objToWork)) {

                              let currentName = key;
                              let current = objToWork[key];
                              console.log(`${currentName}: ${current}`)
               }
};
printKeys('{"name": "George", "age": 40, "town": "Sofia"}');

