// function solve(array, criteria){
//                const arrayParsed = JSON.parse(array); 
//                let result = [];

//                if(criteria === 'all'){
//                               for(let person of arrayParsed){
//                                              result.push(`${person.first_name} ${person.last_name} - ${person.email}`);
//                               }
//                } else {
//                               let [nameCriteria, valueCriteria] = criteria.split('-');
//                               for(let person of arrayParsed){
//                                              if(person[nameCriteria] === valueCriteria){
//                                                             result.push(`${person.first_name} ${person.last_name} - ${person.email}`);
//                                              }
//                               }
//                }
//                for(let i = 0; i < result.length; i++){
//                               console.log(`${i}. ${result[i]}`);
//                }
// }

function solve(persons, criteria) {
               const [nameCriteria, valueCriteria] = criteria.split('-');
               let counter = 0;

               JSON.parse(persons).forEach(person => criteriaFilter.call(person));

               function criteriaFilter() {
                              if (this[nameCriteria] === valueCriteria || criteria == 'all') {
                                             return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`)
                              }
               }
}



solve(`[{
               "id": "1",
               "first_name": "Kaylee",
               "last_name": "Johnson",
               "email": "k0@cnn.com",
               "gender": "Female"
             }, {
               "id": "2",
               "first_name": "Kizzee",
               "last_name": "Johnson",
               "email": "kjost1@forbes.com",
               "gender": "Female"
             }, {
               "id": "3",
               "first_name": "Evanne",
               "last_name": "Maldin",
               "email": "emaldin2@hostgator.com",
               "gender": "Male"
             }, {
               "id": "4",
               "first_name": "Evanne",
               "last_name": "Johnson",
               "email": "ev2@hostgator.com",
               "gender": "Male"
             }]`,
               'last_name-Johnson');