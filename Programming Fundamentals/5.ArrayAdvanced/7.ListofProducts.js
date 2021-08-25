function listOfProducts(arr) {
               let list = arr.sort();
               for (let i = 0; i < arr.length; i++) {
                              let current = list[i];
                              console.log(`${i + 1}.${current}`);
               }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);