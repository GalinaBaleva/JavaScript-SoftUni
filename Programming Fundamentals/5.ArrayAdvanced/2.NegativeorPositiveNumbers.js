function  negativOrPositivNumber(arr){
               let result = [];
               for(let i = 0; i < arr.length; i++){
                              let current = Number(arr[i]);
                              
                              if(current < 0){
                                             result.unshift(current);
                              } else {
                                             result.push(current);
                              }
                              
               }
               return result;
}
let result = negativOrPositivNumber([3, -2, 0, -1])
console.log(result.join('\n'));