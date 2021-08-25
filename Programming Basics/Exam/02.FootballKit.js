function footballKit(input) {//75 точки от 100
               let tshirtPrice = Number(input[0]);
               let neededSum = Number(input[1]);

               let pensPrice = tshirtPrice * 0.75;
               let sockePrice = pensPrice * 0.2;
               let buttons = (tshirtPrice + pensPrice) * 2;
               let totalSum = tshirtPrice + pensPrice + sockePrice + buttons;
               let totalWhithDiscount = totalSum - (totalSum * 0.15);
               if (totalWhithDiscount >= neededSum) {
                              console.log(`Yes, he will earn the world-cup replica ball!`);
                              console.log(`His sum is ${totalWhithDiscount.toFixed(2)} lv.`);
               } else {
                              let needs = totalWhithDiscount - neededSum;
                              console.log(`No, he will not earn the world-cup replica ball.`);
                              console.log(`He needs ${Math.abs(needs.toFixed(2))} lv. more.`);
               }
}
footballKit(["25", "100"])
footballKit(["55", "310"])
footballKit(["59.99", "500"])