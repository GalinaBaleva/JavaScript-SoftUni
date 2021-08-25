function addressBook(input) {
               let listOfNames = {};
               for (let info of input) {
                              let [name, ...address] = info.split(':');
                              listOfNames[name] = address;
               }
               let keys = Object.keys(listOfNames).sort((a, b) => a.localeCompare(b));
               for (let key of keys) {
                              console.log(`${key} -> ${listOfNames[key]}`)
               }
}
addressBook(['Tim:Doe Crossing',
               'Bill:Nelson Place',
               'Peter:Carlyle Ave',
               'Bill:Ornery Rd']);