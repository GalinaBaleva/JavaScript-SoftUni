function withoutReainder (input){
 let currentInput = Number(input[0]);

 let p1 = 0;
 let p2 = 0;
 let p3 = 0;

for(let i = 1; i <= currentInput; i++){
               let inputFromI = Number(input[i]);

               if (inputFromI % 2 === 0){
                              p1++;
               }
               if (inputFromI % 3 === 0) {
                              p2++;
               }
               if (inputFromI % 4 === 0){
                              p3++;
               }
}
console.log(`${(p1 / currentInput * 100).toFixed(2)}%`);
console.log(`${(p2 / currentInput * 100).toFixed(2)}%`);
console.log(`${(p3 / currentInput * 100).toFixed(2)}%`);
}
withoutReainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])
withoutReainder(["3", "3", "6", "9"])