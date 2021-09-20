function nonDecreasingSubsequense(arr) {
               let newArr = [];

               let min = Number.MIN_SAFE_INTEGER;

               for (let i = 0; i < arr.length; i++) {
                              if (arr[i] >= min) {
                                             newArr.push(arr[i]);
                                             min = arr[i];
                              }
               }
               return newArr;
}
nonDecreasingSubsequense([1,
               3,
               8,
               4,
               10,
               12,
               3,
               2,
               24]);
nonDecreasingSubsequense([1,
               2,
               3,
               4]);
nonDecreasingSubsequense([20,
               3,
               2,
               15,
               6,
               1]);