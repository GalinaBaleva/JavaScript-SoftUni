class CarDealership {
               constructor(name) {
                              this.name = name;
                              this.availableCars = [];
                              this.soldCars = [];
                              this.totalIncome = 0;
               };

               addCar(model, horsepower, price, mileage) {
                              if (typeof model != 'string' || model == '' || typeof horsepower != 'number' || horsepower < 0 || horsepower.toFixed() != horsepower ||
                                             typeof price !== 'number' || price < 0 || typeof mileage !== 'number' || mileage < 0) {
                                             throw new Error(`Invalid input!`);
                              };
                              this.availableCars.push({ model, horsepower, price, mileage });
                              return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
               };
               sellCar(model, desiredMileage) {
                              let indexOfCar = this.availableCars.findIndex(car => car.model == model);
                              if (indexOfCar < 0) {
                                             throw new Error(`${model} was not found!`);
                              }
                              let carMileas = this.availableCars[indexOfCar].mileage;
                              let carPrice = this.availableCars[indexOfCar].price
                              let diferent = carMileas - desiredMileage;
                              if (diferent <= 0) {
                                             this.availableCars[indexOfCar].price = carPrice;
                              } else if (diferent > 0 && diferent <= 40000) {
                                             this.availableCars[indexOfCar].price = carPrice - (carPrice * 0.05);
                              } else if (diferent > 40000) {
                                             this.availableCars[indexOfCar].price = carPrice - (carPrice * 0.1);
                              };
                              let soldCar = Array.from(this.availableCars.splice(indexOfCar, 1));
                              let horsepower = soldCar[0].horsepower;
                              let price = soldCar[0].price;
                              this.soldCars.push({ model, horsepower, price });

                              this.totalIncome += price;
                              return `${model} was sold for ${price.toFixed(2)}$`;
               };
               currentCar() {
                              let result = [];
                              if (this.availableCars.length <= 0) {
                                             return `There are no available cars`;
                              }
                              result.push(`-Available cars:`);

                              for (let car of this.availableCars) {
                                             result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
                              };
                              return result.join(`\n`);
               };
               salesReport(criteria) {
                              let sorted = 0;
                              let result = [];
                              if (criteria == 'horsepower') {
                                             sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                              } else if (criteria == 'model') {
                                             sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                              } else {
                                             throw new Error(`Invalid criteria!`);
                              };
                              result.push(`-SoftAuto has a total income of ${this.totalIncome.toFixed(2)}$`);
                              result.push(`-${sorted.length} cars sold:`);

                              for (let car of sorted) {
                                             result.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`);
                              }
                              return result.join('\n');
                              /*-SoftAuto has a total income of 29600.00$
                              -2 cars sold:
                              ---Mercedes C63 - 300 HP - 26100.00$
                              ---Toyota Corolla - 100 HP - 3500.00$*/

               }
}
//let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));
/*New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
Uncaught Error Error: Invalid input!*/

// let dealership2 = new CarDealership('SoftAuto');
// dealership2.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership2.addCar('Mercedes C63', 300, 29000, 187000);
// dealership2.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership2.sellCar('Toyota Corolla', 230000));
// console.log(dealership2.sellCar('Mercedes C63', 110000));
// console.log(dealership2.sellCar('Lada', 40000));

/*Toyota Corolla was sold for 3500.00$
Mercedes C63 was sold for 26100.00$*/

// let dealership3 = new CarDealership('SoftAuto');
// dealership3.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership3.addCar('Mercedes C63', 300, 29000, 187000);
// dealership3.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership3.currentCar());

/*-Available cars:
---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
---Audi A3 - 120 HP - 240000.00 km - 4900.00$*/

let dealership4 = new CarDealership('SoftAuto');
dealership4.addCar('Toyota Corolla', 100, 3500, 190000);
dealership4.addCar('Mercedes C63', 300, 29000, 187000);
dealership4.addCar('Audi A3', 120, 4900, 240000);
dealership4.sellCar('Toyota Corolla', 230000);
dealership4.sellCar('Mercedes C63', 110000);
console.log(dealership4.salesReport('horsepower'));

/*-SoftAuto has a total income of 29600.00$
-2 cars sold:
---Mercedes C63 - 300 HP - 26100.00$
---Toyota Corolla - 100 HP - 3500.00$*/