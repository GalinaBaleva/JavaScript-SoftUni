class Garden {
               constructor(speceAvailable){
                              this.speceAvailable = Number(speceAvailable);
                              this.plants = [];
                              this.storage = [];
               };
               addPlant(plantName, spaceRequired){
                              if(this.speceAvailable < spaceRequired){
                                             throw new Error(`Not enough space in the garden.`);
                              };

                              let indexOfPlant = this.plants.findIndex(plant => plant.plantName === plantName);
                              if(indexOfPlant < 0){
                                             this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0})
                                             this.speceAvailable = this.speceAvailable - spaceRequired;
                                             return `The ${plantName} has been successfully planted in the garden.`
                              }
                               //else {
                              //                this.plants[indexOfPlant].
                              // }            
               };
               ripenPlant(plantName, quantity){
                              quantity = Number(quantity);
                              let indexOfPlant = this.plants.findIndex(plant => plant.plantName === plantName);
                              if(indexOfPlant < 0){
                                             throw new Error(`There is no ${plantName} in the garden.`);
                              };
                              if(this.plants[indexOfPlant].ripe === true){
                                             throw new Error(`The ${plantName} is already ripe.`);
                              };
                              if(quantity <= 0){
                                             throw new Error(`The quantity cannot be zero or negative.`);
                              };
                              this.plants[indexOfPlant].ripe = true;
                              this.plants[indexOfPlant].quantity += quantity;
                              if(quantity == 1){
                                             return `${quantity} ${plantName} has successfully ripened.`;
                              }else {
                                             return `${quantity} ${plantName}s have successfully ripened.`
                              }
               };
              harvestPlant(plantName){
               let indexOfPlant = this.plants.findIndex(plant => plant.plantName === plantName);
               if(indexOfPlant < 0){
                              throw new Error(`There is no ${plantName} in the garden.`)
               };
               if(this.plants[indexOfPlant].ripe == false){
                              throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
               };
               let plant = this.plants.splice(indexOfPlant, 1);
               let quantity = plant[0].quantity;
               let space = Number(plant[0].spaceRequired);
               this.storage.push({plantName, quantity});
               this.speceAvailable = this.speceAvailable + space;

               return `The ${plantName} has been successfully harvested.`
              }

              generateReport(){
                             let result = [];
                             result.push(`The garden has ${this.speceAvailable} free space left.`);

                             let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
                             let middleResult = [];
                             for(let plant of sortedPlants){
                                            middleResult.push(plant.plantName);
                             };
                             result.push(`Plants in the garden: ${middleResult.join(', ')}`);

                             if(this.storage.length <= 0){
                                            console.log(`Plants in storage: The storage is empty.`);
                             } else {
                                            let secondMiddleResult = [];
                                            for(let plant of this.storage){
                                                           secondMiddleResult.push(`${plant.plantName} (${plant.quantity})`);
                                            }
                                            result.push(`Plants in storage: ${secondMiddleResult.join(', ')}`)
                             }
                             return result.join('\n');
              }

}
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(() => (myGarden.addPlant('olive', 50)));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
Uncaught Error Error: Not enough space in the garden.*/

// const myGarden2 = new Garden(250)
// console.log(myGarden2.addPlant('apple', 20));
// console.log(myGarden2.addPlant('orange', 100));
// console.log(myGarden2.addPlant('cucumber', 30));
// console.log(myGarden2.ripenPlant('apple', 10));
// console.log(myGarden2.ripenPlant('orange', 1));
// console.log(myGarden2.ripenPlant('orange', 4));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The cucumber has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
Uncaught Error Error: The orange is already ripe.*/

// const myGarden3 = new Garden(250)
// console.log(myGarden3.addPlant('apple', 20));
// console.log(myGarden3.addPlant('orange', 100));
// console.log(myGarden3.addPlant('cucumber', 30));
// console.log(myGarden3.ripenPlant('apple', 10));
// console.log(myGarden3.ripenPlant('orange', 1));
// console.log(myGarden3.ripenPlant('olive', 30));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The cucumber has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
Uncaught Error Error: There is no olive in the garden.*/

// const myGarden4 = new Garden(250)
// console.log(myGarden4.addPlant('apple', 20));
// console.log(myGarden4.addPlant('orange', 100));
// console.log(myGarden4.addPlant('cucumber', 30));
// console.log(myGarden4.ripenPlant('apple', 10));
// console.log(myGarden4.ripenPlant('orange', 1));
// console.log(myGarden4.ripenPlant('cucumber', -5));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The cucumber has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
Uncaught Error Error: The quantity cannot be zero or negative.
*/

// const myGarden5 = new Garden(250)
// console.log(myGarden5.addPlant('apple', 20));
// console.log(myGarden5.addPlant('orange', 200));
// console.log(myGarden5.addPlant('raspberry', 10));
// console.log(myGarden5.ripenPlant('apple', 10));
// console.log(myGarden5.ripenPlant('orange', 1));
// console.log(myGarden5.harvestPlant('apple'));
// console.log(myGarden5.harvestPlant('olive'));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The raspberry has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
The apple has been successfully harvested.
Uncaught Error Error: There is no olive in the garden.

*/

// const myGarden6 = new Garden(250)
// console.log(myGarden6.addPlant('apple', 20));
// console.log(myGarden6.addPlant('orange', 200));
// console.log(myGarden6.addPlant('raspberry', 10));
// console.log(myGarden6.ripenPlant('apple', 10));
// console.log(myGarden6.ripenPlant('orange', 1));
// console.log(myGarden6.harvestPlant('apple'));
// console.log(myGarden6.harvestPlant('raspberry'));

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The raspberry has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
The apple has been successfully harvested.
Uncaught Error Error: The raspberry cannot be harvested before it is ripe.*/

const myGarden7 = new Garden(250)
console.log(myGarden7.addPlant('apple', 20));
console.log(myGarden7.addPlant('orange', 200));
console.log(myGarden7.addPlant('raspberry', 10));
console.log(myGarden7.ripenPlant('apple', 10));
console.log(myGarden7.ripenPlant('orange', 1));
console.log(myGarden7.harvestPlant('orange'));
console.log(myGarden7.generateReport());

/*The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The raspberry has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
The orange has been successfully harvested.
The garden has 220 free space left.
Plants in the garden: apple, raspberry
Plants in storage: orange (1)*/
