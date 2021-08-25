function firstAndLastKNumber(arr){
               let k = Number(arr.shift());
               let firstSlice = arr.slice(0, k).join(' ');
               let secondSlice = arr.slice(arr.length - k, arr.length).join(' '); // може и просто arr.slice(-k).join(' ');

               console.log(firstSlice);
               console.log(secondSlice);
}
firstAndLastKNumber([2, 7, 8, 9])