function roadRadar(speed, area) {
               let speedLimit = {
                              motorway: 130,
                              interstate: 90,
                              city: 50,
                              residential: 20
               }

               const objFunction = {
                              motorway: () => 130 - speed,
                              interstate: () => 90 - speed,
                              city: () => 50 - speed,
                              residential: () => 20 - speed
               }

               function status(numberFromObjFunction) {
                              if (numberFromObjFunction <= 20) {
                                             return 'speeding';
                              } else if (numberFromObjFunction <= 40) {
                                             return 'excessive speeding';
                              } else {
                                             return 'reckless driving';
                              }
               }
               let diference = objFunction[area](speed)
               if (diference >= 0) {
                              console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`)
               } else {
                              console.log(`The speed is ${Math.abs(diference)} km/h faster than the allowed speed of ${speedLimit[area]} - ${status(Math.abs(diference))}`)
               }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');