class Restaurant {
               constructor(budget){
                              this.budgetMoney =budget;
                              this.menu = {};
                              this.stockProducts = {};
                              this.history = [];
               };
               loadProducts(stringsArr){
                              for(let products of stringsArr){
                                             let [prodName, prodQuantity, prodTotalPrice] = products.split(' ');
                                             prodQuantity = Number(prodQuantity);
                                             prodTotalPrice = Number(prodTotalPrice);
                                             if(prodTotalPrice <= this.budgetMoney){
                                                            if(this.stockProducts[prodName]){
                                                                           this.stockProducts[prodName] += prodQuantity;
                                                            } else {
                                                                           this.stockProducts[prodName] = prodQuantity; 
                                                            };
                                                           this.budgetMoney -= prodTotalPrice;
                                                            this.history.push(`Successfully loaded ${prodQuantity} ${prodName}`)
                                             } else {
                                                            this.history.push(`There was not enough money to load ${prodQuantity} ${prodName}`)
                                             }
                              }
                              return this.history.join('\n');
               }

               addToMenu(meal, neededProudcts, price){
                              price = Number(price);
                              if(this.menu[meal]){
                                             return `The ${meal} is already in the our menu, try something different.`
                              } else {
                                             this.menu[meal] = {
                                                            products: neededProudcts,
                                                            price: price
                                             }
                              };

                              if(Object.keys(this.menu).length == 1){
                                             return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                              } else {
                                             return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
                              }
               
               };
               showTheMenu(){
                              let result = [];
                              if(Object.keys(this.menu).length <= 0){
                                             return `Our menu is not ready yet, please come later...`
                              }else {
                                             for(let meal of Object.keys(this.menu)){
                                                            result.push(`${meal} - $ ${this.menu[meal].price}`);
                                             };
                                             return result.join(`\n`);
                              }
               };
               makeTheOrder(meal){
                              if(this.menu[meal]){
                                             let isTrue = false;
                                             let neededProudcts = this.menu[meal].products;
                                             for(let prod of neededProudcts){
                                                            let [product, quantity] = prod.split(' ');
                                                            let quantityWeHave = this.stockProducts[product];
                                                            if(!this.stockProducts[product] || quantityWeHave < quantity){
                                                                           isTrue = false
                                                            } else {
                                                                           isTrue = true;
                                                                           this.stockProducts[product] -= quantity;
                                                            }
                                             };
                                             if(isTrue){
                                                            this.budgetMoney += this.menu[meal].price;

                                                            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
                                             } else {
                                                            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                                             }
               
                              } else {
                                             return `There is not ${meal} yet in our menu, do you want to order something else?`
                              }
               }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

let kitchen2 = new Restaurant(1000);
console.log(kitchen2.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen2.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

let kitchen3 = new Restaurant(1000);
console.log(kitchen2.showTheMenu());
// frozenYogurt - $ 9.99
// Pizza - $ 15.55


let kitchen4 = new Restaurant(1000);
kitchen4.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen4.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen4.makeTheOrder('frozenYogurt'));

//Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.

let test = new Restaurant(1000);
test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
console.log(test.budgetMoney)
//expect(test.budgetMoney).to.equal(895);