function sameNumbers(number) {
               let stringNum = number.toString().split('');
               let flag = true;

               for (let i = 0; i < stringNum.length - 1; i++) {
                              if (stringNum[i] !== stringNum[i + 1]) {
                                             flag = false;
                                             break;
                              }
               }

               let sum = stringNum.map(Number).reduce((a, b) => a + b);
               if (flag === false) {
                              console.log(`false`);
               } else {
                              console.log(`true`)
               }
               console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
sameNumbers(2222221);