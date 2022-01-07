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