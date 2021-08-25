function sequence2(input) {
               let index = 0;
               let finalNum = Number(input[index]);
               index++;

               let firstNumber = 1;

               while (firstNumber <= finalNum) {
                              console.log(firstNumber);
                              firstNumber = firstNumber * 2 + 1;
               }
}
//sequence2(["3"])
//sequence2(["8"])
//sequence2(["17"])
sequence2(["31"])