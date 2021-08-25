// function nxnMatrix(n) {
//                for (let i = 0; i < n; i++) {
//                               let result = '';
//                               for (let j = 0; j < n; j++) {
//                                              let current = Number(n);
//                                              result += current + ' ';
//                               }
//                               console.log(result)
//                }
// }
// nxnMatrix(3);

function nxnMatrix(n) {

               function constructRow(n) {
                              let result = '';

                              for (let j = 0; j < n; j++) {
                                             let current = Number(n);
                                             result += current + ' ';
                              }

                              return result;
               }
               for (let i = 0; i < n; i++) {
                              console.log(constructRow(n))
               }
}
nxnMatrix(3);
