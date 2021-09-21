function magicMatrices(arr) {
               let row1 = 0;
               let row2 = 0;
               let row3 = 0;
               let col = [];

               for (let i = 0; i < arr.length; i++) {
                              row1 += arr[i][0];
                              row2 += arr[i][1];
                              row3 += arr[i][2];
                              let temporaryCol = 0;
                              for (let j = 0; j < arr[i].length; j++) {
                                             temporaryCol += arr[i][j];
                              }
                              col.push(temporaryCol);
               }

               if (col[0] === col[1] && col[1] === col[2] && row1 === col[0] && row2 === col[0] && row3 === col[0]) {
                              return true;
               } else { 
                              return false 
               }
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));