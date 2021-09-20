function nElemant(arr, number) {
               let result = [];
               for(let i = 0; i < arr.length; i += number){
                              result.push(arr[i]);
               }
               return result;
               
}
nElemant(['5',
               '20',
               '31',
               '4',
               '20'],
               2);
nElemant(['dsa',
               'asd',
               'test',
               'tset'],
               2);
nElemant(['1',
               '2',
               '3',
               '4',
               '5'],
               6);