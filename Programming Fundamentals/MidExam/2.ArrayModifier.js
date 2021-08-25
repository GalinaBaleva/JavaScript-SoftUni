function arrayModifier(array) {
               let line = array.shift().toString().split(' ').map(Number);
               
               let index = 0; 
               while(array[index] !== 'end'){
                              let current = array[index].split(' ');
                              let command = current[0];
                              
                              if(command === 'swap'){
                                             let temp = line[current[1]];
                                             let temp2 = line[current[2]];
                                             line.splice(current[1], 1, temp2);
                                             line.splice(current[2], 1, temp);
                              } else if(command === 'multiply'){
                                             let temp = line[current[1]];
                                             let temp2 = line[current[2]];
                                             let sum = temp * temp2;
                                             line.splice(current[1], 1, sum);
                                             
                              } else if(command === 'decrease'){
                                             for(let i = 0; i < line.length; i++){
                                                            let number = line[i] - 1;
                                                            line.splice(i, 1, number);
                                             }
                                             
                              }

                              index++;
                              current = array[index];
               }
               console.log(line.join(', '))

}
arrayModifier([
               '23 -2 321 87 42 90 -123',
               'swap 1 3',
               'swap 3 6',
               'swap 1 0',
               'multiply 1 2',
               'multiply 2 1',
               'decrease',
               'end'
]);
arrayModifier([
               '1 2 3 4',
               'swap 0 1',
               'swap 1 2',
               'swap 2 3',
               'multiply 1 2',
               'decrease',
               'end'
])