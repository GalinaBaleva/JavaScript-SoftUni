function multiplicationTable(input) {

               let inputNum = Number(input[0]);

for (let i = 1; i <= 10; i++) {
               console.log(`${i} * ${inputNum} = ${i * inputNum}`);
}

//                let sum = "";
//                for (let i = 1; i <= 10; i++) {
//                               sum += `${i} * ${inputNum} = ${i * inputNum}\n`;
//                }
//                console.log(sum);
}
multiplicationTable(["5"]);