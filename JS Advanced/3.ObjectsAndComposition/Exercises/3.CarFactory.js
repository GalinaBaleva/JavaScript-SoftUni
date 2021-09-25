// function carFactory(wantedCar) {
//                let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
//                let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
//                let wheelsize = wantedCar.wheelsize %2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;
           
//                return {
//                    model: wantedCar.model,
//                    engine: engines.filter(e => e.power >= wantedCar.power)[0],
//                    carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
//                    wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
//                }
//            }
function carFactory(obj) {
               let newObj = {};

               function getEngien(power) {
                              let engien = {};
                              if (power <= 90) {
                                             engien = {
                                                            power: 90,
                                                            volume: 1800
                                             };
                              } else if (power <= 120) {
                                             engien = {
                                                            power: 120,
                                                            volume: 240
                                             };
                              } else if (power <= 200) {
                                             engien = {
                                                            power: 200,
                                                            volume: 3500
                                             };
                              }
                              return engien;

               }
               let wheelsSize = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

               newObj.model = obj.model;
               newObj.engine = getEngien(obj.power);
               newObj.carriage = {
                              type: obj.carriage,
                              color: obj.color,
               };
               newObj.wheels = new Array(4).fill(wheelsSize, 0, 4);
               
               return newObj;

}
let result = carFactory({
               model: 'VW Golf II',
               power: 90,
               color: 'blue',
               carriage: 'hatchback',
               wheelsize: 14
});
console.log(result);
let result2 = carFactory({
               model: 'Opel Vectra',
               power: 110,
               color: 'grey',
               carriage: 'coupe',
               wheelsize: 17
});
console.log(result2);

let result3 = carFactory ({
               model: 'Ferrari',
               power: 200,
               color: 'red',
               carriage: 'coupe',
               wheelsize: 21
           });
console.log(result3);