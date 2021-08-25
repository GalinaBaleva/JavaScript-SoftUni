function employees(array){
               for(let name of array){
                              let employeesData = {
                                             name: name,
                                             personalNumber: name.length
                              }
                              console.log(`Name: ${employeesData.name} -- Personal Number: ${employeesData.personalNumber}`);
               }
}
employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);