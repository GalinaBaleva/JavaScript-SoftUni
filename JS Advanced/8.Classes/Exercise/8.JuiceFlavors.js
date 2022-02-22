function juiceFlavors(array) {

  let juices = new Map();
  let bottles = {};

  for (let juice of array) {
    let [juiceName, quantity] = juice.split(' => ');
    quantity = Number(quantity);
    if (juices.has(juiceName)) {
      let totalLiters = juices.get(juiceName);
      totalLiters += quantity;
      let theRest = countingBottles.apply(juices, [juiceName, totalLiters])
      juices.set(juiceName, theRest)
    } else {
      let total = countingBottles.apply(juices, [juiceName, quantity]);
      juices.set(juiceName, total);
    };
  };

  function countingBottles(juiceName, totalLiters) {
    if (totalLiters >= 1000) {
      let theRest = 0;
      let bottle = Number((totalLiters / 1000).toFixed());
      if (bottles[juiceName]) {
        bottles[juiceName] += bottle;
      } else {
        bottles[juiceName] = bottle;
      }
      theRest = totalLiters - (bottle * 1000);
      return (theRest)

    } else {
      return (totalLiters);
    }

  };
Object.entries(bottles).forEach(element => console.log(`${element[0]} => ${element[1]}`))
};

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);