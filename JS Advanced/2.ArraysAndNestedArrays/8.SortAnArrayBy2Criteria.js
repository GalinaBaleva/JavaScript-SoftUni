function sortBy2Criteria(array) {
               array.sort((a, b) => a.length - b.length || a.localeCompare(b));

               return array.join('\n');
}
console.log(sortBy2Criteria(['alpha',
               'beta',
               'gamma']))
console.log(sortBy2Criteria(['Isacc',
               'Theodor',
               'Jack',
               'Harrison',
               'George']))
console.log(sortBy2Criteria(['test',
               'Deny',
               'omen',
               'Default']));