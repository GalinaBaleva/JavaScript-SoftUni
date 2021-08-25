function adAstra(stringLine) {
               let pattern = /([#||])\b(?<itemName>[A-Za-z\s]+)\1(?<exDate>(?:[0\d^0]|[1|2|3\d]{2}\/[0\d^0|1[0|1|2]{2}\/\d{2}))\1(?<calories>\d{1,5})\b\1/g;
               let items = stringLine.toString().match(pattern);

               let pattern2 = /#|\|/g;

               let totalaCal = 0;

               let obj = [];

               if (items != null) {
                              for (let item of items) {
                                             let [beign, itemName, exDate, calories, final] = item.split(pattern2)
                                             calories = Number(calories);

                                             totalaCal += calories;
                                             obj.push([itemName, exDate, calories])
                              }
               } 

               totalaCal = totalaCal / 2000;

               console.log(`You have food to last you for: ${Math.floor(totalaCal)} days!`);
               for(let info of obj){
                              console.log(`Item: ${info[0]}, Best before: ${info[1]}, Nutrition: ${info[2]}`);
               }

}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);