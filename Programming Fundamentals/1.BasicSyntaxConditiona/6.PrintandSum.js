function printAndSum(biginNum, finishNum) {
               let sum = 0;
               let stringSum = '';
               for (let i = biginNum; i <= finishNum; i++) {
                              let current = Number(i);
                              sum += current;
                              stringSum += current + ' ';
               }
               console.log(stringSum);
               console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)