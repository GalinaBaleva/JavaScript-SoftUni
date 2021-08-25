function anymalType(input) {
               let type = input[0];

               switch (type) {
                              case "dog": console.log(`mammal`); break;
                              case "crocodile":
                              case "tortoise":
                              case "snake": console.log(`reptile`); break;
                              default: console.log(`unknown`); break;

               }
}
anymalType(["dog"])
anymalType(["snake"])
anymalType(["cat"])
