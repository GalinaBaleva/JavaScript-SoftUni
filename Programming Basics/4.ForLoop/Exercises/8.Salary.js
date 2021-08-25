function salary (input){
               let countOfTabs = Number(input.shift());
               let salary = Number(input.shift());
               
               let facebook = 0;
               let instagram = 0;
               let reddit = 0;
               
               for (let i = 0; i <= countOfTabs; i++){
               
                             let inputString = input.shift();
                             
                             if (inputString === "Facebook"){
                                            facebook++;
                             } else if (inputString === "Instagram"){
                                            instagram++;
                             } else if (inputString === "Reddit"){
                                            reddit++;
                             }
               }
               
               let remainingSalary = salary - (facebook * 150) - (instagram * 100) - (reddit * 50);
               
               if (remainingSalary >= 1){
                              console.log(Math.floor(remainingSalary));
               } else {
                              console.log(`You have lost your salary.`);
               }
               }
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])