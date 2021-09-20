function rotateArray(arr, rotations) {
               for(let i = rotations; i > 0; i--){
                              let current = arr.pop();
                              arr.unshift(current);
               }
               console.log(arr.join(' '));
}
rotateArray(['1',
               '2',
               '3',
               '4'],
               2);
rotateArray(['Banana',
               'Orange',
               'Coconut',
               'Apple'],
               15);