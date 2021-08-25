function rounding(num, percision){

               if (percision >= 15){
                              percision = 15;
               }
               let fixedNum = num.toFixed(percision);
               console.log(parseFloat(fixedNum));
}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)