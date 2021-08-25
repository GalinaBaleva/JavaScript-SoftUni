function cake(input) {
               let weght = Number(input[0]);
               let hight = Number(input[1]);
               let sizeofCake = weght * hight;
               let pisesCommand = input[2];
               let index = 3;


               while (pisesCommand !== "STOP") {
                              let currentPise = Number(pisesCommand);
                              if (sizeofCake > 0) {
                                             sizeofCake -= currentPise;
                              }
                              if (sizeofCake <= 0) {
                                             console.log(`No more cake left! You need ${Math.abs(sizeofCake)} pieces more.`);
                                             break;
                              }
                              pisesCommand = input[index];
                              index++;
               }
               if (pisesCommand === "STOP") {
                              console.log(`${Math.abs(sizeofCake)} pieces are left.`)
               }
}
cake(["10", "10", "20", "20", "20", "20", "21"])
cake(["10", "2", "2", "4", "6", "STOP"])