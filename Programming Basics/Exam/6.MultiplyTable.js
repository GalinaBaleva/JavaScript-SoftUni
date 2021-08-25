function multiplyTable(input) {
               let index = 0
               let num = input[index];
               let firstNum = Number(num[2]);
               let secondNum = Number(num[1]);
               let thertNum = Number(num[0]);

               let finalNum = 0;

               for (let a = 1; a <= firstNum; a++) {
                              for (let b = 1; b <= secondNum; b++) {
                                             for (let c = 1; c <= thertNum; c++) {
                                                            let sum = a * b * c;
                                                            if (a <= 0 && b <= 0 && c <= 0){
                                                                           return;
                                                            }
                                                            console.log(`${a} * ${b} * ${c} = ${sum};`)
                                             }
                              }
               }

}
//multiplyTable(["324"])
multiplyTable(["222"])
multiplyTable(["-324"])