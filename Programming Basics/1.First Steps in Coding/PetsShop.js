function petsShop(input){
    let dogs = Number(input[0]);
    let otherPets = Number(input[1]);
    let dogsFoodPrice = dogs * 2.5;
    let otherFoodPrice = otherPets * 4;
    let totalFoodPrice = dogsFoodPrice + otherFoodPrice;


    console.log(`${totalFoodPrice} lv.`);

}
petsShop(['5', '4'])