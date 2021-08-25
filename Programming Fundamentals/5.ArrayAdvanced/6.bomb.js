function bomb(numbers, params) { // не работи много корректно
  let [target, power] = params;

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];

    if (currentNum === target) {
      let startIndex = Math.max(0, i - power); //math.max in cases where index is -1(outside the array)
      let countToEnd = power * 2 + 1;

      numbers.splice(startIndex, countToEnd);
      i = i - power - 1; //
    }
  }
  // console.log(numbers);
  console.log(numbers.reduce((a, b) => a + b, 0));
}
//bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bomb([1, 7, 7, 1, 2, 3], [7, 1]);
//bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);