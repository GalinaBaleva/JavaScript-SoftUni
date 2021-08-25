function phoneBook(input) {
               let infoObj = {};
               for (let info of input) {
                              let [name, phone] = info.split(' ');
                              infoObj[name] = phone;
               };
               for(let key of Object.keys(infoObj)){
                              console.log(`${key} -> ${infoObj[key]}`)
               }

}
phoneBook([
               'Tim 0834212554',
               'Peter 0877547887',
               'Bill 0896543112',
               'Tim 0876566344'])