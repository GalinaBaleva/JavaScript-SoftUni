function thePianist(stringLine) {
  let n = Number(stringLine.shift());

  let obj = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = stringLine.shift().split('|');

    obj[piece] = [composer, key];
  }

  while (stringLine != 'Stop') {
    let [command, ...tokens] = stringLine.shift().split('|');
    if (command === 'Add') {
      let [piece, composer, key] = tokens;
      if (obj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        obj[piece] = [composer, key];
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }

    } else if (command === 'Remove') {
      let piece = tokens;
      if (obj.hasOwnProperty(piece)) {
        obj[piece] = [0];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    } else if (command === 'ChangeKey') {
      let [piece, newKey] = tokens;
      if (obj.hasOwnProperty(piece)) {
        obj[piece][1] = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }
  }
  let result = []
  for (let info of Object.entries(obj)) {
    if (info[1][0].length > 1) {
      result.push(info);
    }
  }

  let sorted = result.sort((a, b) => a[0].localeCompare(b[0]) || a[1][0].localeCompare(b[1][0]));

  for (let info of sorted) {
    console.log(`${info[0]} -> Composer: ${info[1][0]}, Key: ${info[1][1]}`)
  }


}
thePianist([
  '4',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Shild|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);
console.log('------------------------------------');
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);