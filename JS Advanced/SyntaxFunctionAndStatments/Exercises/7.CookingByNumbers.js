function cookingByNumbers(number, ...commands){
               number = Number(number);

               let commandsObj = {
                              chop: (x) => x / 2,
                              dice: (x) => Math.sqrt(x),
                              spice: (x) => x + 1,
                              bake: (x) => x * 3,
                              fillet: (x) => x * 0.80
               }

               for(let i = 0; i < 5; i++){
                              let current = commandsObj[commands[i]](number);
                              number = current;
                              console.log(number);
               }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');