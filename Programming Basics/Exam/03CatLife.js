function cat(input) {
               let type = input[0]
               let gender = input[1]

               if (gender === 'm') {

                              switch (type) {
                                             case "British Shorthair": console.log(`${Math.trunc(13 * 12)/6} cat months`); break;
                                             case "Siamese": console.log(`${Math.trunc(15 * 12)/6} cat months`); break;
                                             case "Persian": console.log(`${Math.trunc(14 * 12)/6} cat months`); break;
                                             case "Ragdoll": console.log(`${Math.trunc(16 * 12)/6} cat months`); break;
                                             case "American Shorthair": console.log(`${Math.trunc(12 * 12)/6} cat months`); break;
                                             case "Siberian": console.log(`${Math.trunc(11 * 12)/6} cat months`); break;
                                             default: console.log(`${type} is invalid cat!`); break;

                              }
               } else if (gender === 'f') {

                              switch (type) {
                                             case "British Shorthair": console.log(`${Math.trunc(14 * 12)/6} cat months`); break;
                                             case "Siamese": console.log(`${Math.trunc(16 * 12)/6} cat months`); break;
                                             case "Persian": console.log(`${Math.trunc(15 * 12)/6} cat months`); break;
                                             case "Ragdoll": console.log(`${Math.trunc(17 * 12)/6} cat months`); break;
                                             case "American Shorthair": console.log(`${Math.trunc(13 * 12)/6} cat months`); break;
                                             case "Siberian": console.log(`${Math.trunc(12 * 12)/6} cat months`); break;
                                             default: console.log(`${type} is invalid cat!`); break;

                              }
               }

}
cat(["Persian", "m"])
cat(["Tom", "m"])