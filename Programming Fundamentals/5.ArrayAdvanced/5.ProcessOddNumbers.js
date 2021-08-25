function processOddNumbers(arr) {
               let result = arr
                              .filter((num, i) => i % 2 === 1)
                              .map(x => x * 2)
                              .reverse()
                              .join(' ');
               return result;
}
let result = processOddNumbers([3, 0, 10, 4, 7, 3]);
console.log(result);


// function processOddNumbers(arr){
//                let result = [];
//                for(let i = 0; i < arr.length; i++){
//                               if(i % 2 === 1){
//                                              let sum = Number(arr[i]) * 2;
//                                              result.push(sum);
//                               }
//                }
//                return result.reverse().join(' ');
// }
// let result = processOddNumbers([3, 0, 10, 4, 7, 3]);
// console.log(result);


