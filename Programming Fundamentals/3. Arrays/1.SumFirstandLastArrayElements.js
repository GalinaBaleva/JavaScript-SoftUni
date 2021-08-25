function sumFirstandLastArrayElements(input) {

               // let sum = 0;
               // for (let i = 0; i < input.length; i++) {
               //                if (i === 0) {
               //                               sum += Number(input[i]);
               //                }
               //                if (i === input.length - 1) {
               //                               sum += Number(input[i]);
               //                }
               // }
               let first = input[0];
               let last = input[input.length-1];
               let sum = first + last;
               
               console.log(sum);
}
sumFirstandLastArrayElements([20, 30, 40]);
sumFirstandLastArrayElements([10, 17, 22, 33]);
sumFirstandLastArrayElements([11, 58, 69]);