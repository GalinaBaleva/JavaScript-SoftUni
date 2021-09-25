function calorieObject(array) {
               let foodObject = {};

               while (array[0] !== undefined){
                              let product = array.shift();
                              let caloriesGrams = Number(array.shift());

                              foodObject[product] = caloriesGrams;
               };
               console.log(foodObject)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);