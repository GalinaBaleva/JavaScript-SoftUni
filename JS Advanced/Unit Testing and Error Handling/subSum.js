function subsum(array, start, end) {
               if(Array.isArray(array) == false){
                              return NaN;
               };
               if(start < 0){
                              start = 0;
               };
               if(end >= array.length){
                              end = array.length - 1;
               }
               let sliced = array.slice(start, end + 1);
               let sum = 0

               for(let i = 0; i < sliced.length; i++){
                              sum += Number(sliced[i]);
               };
               return sum;
};
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));