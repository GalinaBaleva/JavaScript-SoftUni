function solution() {
               let string = '';
               return {
                              append: (s) => string += s, // - append the given string at the end of the internal string
                              removeStart: (n) => string = string.slice(n),// - remove the first n characters from the string, n is an integer
                              removeEnd: (n) => string = string.slice(0, -n),// - remove the last n characters from the string, n is an integer
                              print: () => console.log(string)
               }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// let secondZeroTest = solution();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();