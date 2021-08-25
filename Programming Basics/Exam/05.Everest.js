function everest(input){
               let firstPoint = 5364;
               let secontdPoint = 8848;

               let index = 0;
               let command = input[index];
               let days = 1;

               while (command !== "END"){
                              let currentCommand = command;
                              index++;
                              if (currentCommand === "Yes"){
                                             days++
                                             let currentKm = Number(input[index]); 
                                             firstPoint += currentKm;                                           
                              } else if(currentCommand === "No"){
                                             let currentKm = Number(input[index]); 
                                             firstPoint += currentKm;
                              }
               if (firstPoint >= secontdPoint){
                              break;
               }
               if (days === 5){
                              break;
               }

                              index++;
                              command = input[index];
               }
               if (firstPoint >= secontdPoint){
                              console.log(`Goal reached for ${days} days!`);
               } else {
                              console.log(`Failed!`);
                              console.log(firstPoint);
               }
}
everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
everest(["Yes",
"700",
"END"])