function moving(input) {
               let width = Number(input[0]);
               let length = Number(input[1]);
               let hight = Number(input[2]);
               let index = 3;
               let box = input[index];

               let freeSpaseM2 = width * length * hight;
               let totalM2FromBoxes = 0;

               while (box !== "Done") {
                              let curentBox = Number(box);
                              totalM2FromBoxes += curentBox;
                              freeSpaseM2 -= curentBox;

                              if (freeSpaseM2 <= 0) {
                                             console.log(`No more free space! You need ${Math.abs(freeSpaseM2)} Cubic meters more.`);
                                             break;
                              }
                              index++;
                              box = input[index];

               }
               if (box === "Done") {
                              console.log(`${freeSpaseM2} Cubic meters left.`)
               }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"])
moving(["10", "1", "2", "4", "6", "Done"])