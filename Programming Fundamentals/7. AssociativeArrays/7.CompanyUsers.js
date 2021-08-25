function companyUsers(array) {
               let companyEmployees = {};

               for (let info of array) {
                              let [name, id] = info.split(' -> ');
                              if (!companyEmployees.hasOwnProperty(name)) {
                                             companyEmployees[name] = [];
                              }
                              if (!companyEmployees[name].includes((id))) {
                                             companyEmployees[name].push(id);
                              }
               }
               

               for (let [key, value] of Object.entries(companyEmployees).sort((a,b) => a[0].localeCompare(b[0]))) {
                              let splitedId = value.map(x => `-- ${x}`);
                              console.log(`${key}\n${splitedId.join('\n')}`);
               }

}
// companyUsers([
//                'SoftUni -> AA12345',
//                'SoftUni -> BB12345',
//                'Microsoft -> CC12345',
//                'HP -> BB12345'
// ]);
companyUsers([
               'SoftUni -> AA12345',
               'SoftUni -> CC12344',
               'Lenovo -> XX23456',
               'SoftUni -> AA12345',
               'Movement -> DD11111'
]);