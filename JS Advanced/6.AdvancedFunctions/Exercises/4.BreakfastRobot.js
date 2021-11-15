function solution(input) {
               let library = {
                              apple: { carbohydrate: 1, flavour: 2 },
                              lemonade: { carbohydrate: 10, flavour: 20 },
                              burger: { carbohydrate: 5, fat: 7, flavour: 3 },
                              eggs: { protein: 5, fat: 1, flavour: 1 },
                              turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
               };

               let storage = {
                              protein: 0,
                              carbohydrate: 0,
                              fat: 0,
                              flavour: 0,
               }

               function restock(ingridient, count) {
                              storage[ingridient] += Number(count);
                              return `Success`;
               };

               function prepare(recipe, quantity) {
                              const necessaryProd = Object.keys(library[recipe]);

                              let inneralStorage = {};
                              for(let product of necessaryProd){
                                             let balance = storage[product] - library[recipe][product] * Number(quantity);
                                             if(balance < 0){
                                                            return `Error: not enough ${product} in stock`
                                             } else { 
                                                            inneralStorage[product] = balance;
                                             }
                              }
                              Object.assign(storage, inneralStorage);
                              return `Success`;
               };
               function report() {
                              return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
               };

               function result(stringInput) {
                              let [command, token, quantity] = stringInput.split(' ');
                              let result = '';

                              if (command === 'restock') {
                                             result = restock(token, quantity);
                              } else if (command === 'prepare') {
                                             result = prepare(token, quantity);
                              } else if (command === 'report') {
                                             result = report();
                              }
                              return result;
               };
               return result;
}
let manager = solution();
// console.log(manager("restock flavour 50"))
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));
console.log(`----------------------`)
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));




