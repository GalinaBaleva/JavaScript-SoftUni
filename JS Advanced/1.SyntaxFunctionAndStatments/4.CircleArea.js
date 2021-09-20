function circleArea(input) {
               let type = typeof input;
               if (type === 'number') {
                              let area = Math.PI * (Math.pow(Number(input), 2))
                              console.log(area.toFixed(2));
               } else {
                              console.log(`We can not calculate the circle area, because we receive a ${type}.`)
               }
}
circleArea(5);
circleArea('name');