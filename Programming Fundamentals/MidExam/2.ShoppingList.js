function shoppingList(array){
               let list = array.shift().split('!');
               
               for(let i = 0; i < array.length; i++){
                              let splitedCommand = array[i].split(' ');

                              let command = splitedCommand[0];
                              let item = splitedCommand[1];
                              if(command === 'Urgent'){
                                             if(list.indexOf(item) < 0){
                                                            list.unshift(item);
                                             }
                              } else if(command === 'Unnecessary'){
                                             let index = list.indexOf(item);

                                             if(index >= 0){
                                                            list.splice(index, 1);
                                             }

                              } else if(command === 'Correct'){
                                             let newItem = splitedCommand[2];
                                             let index = list.indexOf(item);

                                             if(index >= 0){
                                                            list.splice(index, 1, newItem);
                                             }

                              } else if(command === 'Rearrange'){
                                             let index = list.indexOf(item);

                                             if(index >= 0){
                                                            
                                                            list.splice(index, 1);
                                                            list.push(item);

                                             }
                              } else if(command === 'Go'){
                                             break;
                              }
               }
               console.log(list.join(', '))

}
// shoppingList(['Tomatoes!Potatoes!Bread', 
//               'Unnecessary Milk', 
//               'Urgent Tomatoes', 
//               'Go Shopping!']);
shoppingList(['Milk!Pepper!Salt!Water!Banana',
               'Urgent Salt',
               'Unnecessary Grapes ',
               'Correct Pepper Onion',
               'Rearrange Grapes',
               'Correct Tomatoes Potatoes',
               'Go Shopping!']);
