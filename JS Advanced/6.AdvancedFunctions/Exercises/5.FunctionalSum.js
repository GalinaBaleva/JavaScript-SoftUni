function add (num){
               let sum = 0;

               function adding(number){
                              sum += number;
                              return adding;
               };
               adding.toString = () => {
                              return sum;
               }
               return adding(num)

}
let a = add(1)(6)(-3);
console.log(a.toString());