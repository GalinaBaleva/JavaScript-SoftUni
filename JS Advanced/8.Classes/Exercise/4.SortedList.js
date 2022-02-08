class List {
               constructor() {
                              this.numbersCollection = [];
                              this.size = 0;
               }

               add(number) {
                              this.numbersCollection.push(number);
                              this.numbersCollection.sort((a, b) => a - b);
                              this.size = this.numbersCollection.length;
               };
               remove(index) {
                              if (index >= this.numbersCollection.length || index < 0) {
                                             throw new Error('Provided Index don\'t Exist');
                              }

                              this.numbersCollection.splice(index, 1);
                              this.size = this.numbersCollection.length;
               };
               get(index) {
                              return this.numbersCollection[index];
               };
}

let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
list.add(5);
list.add(3);
list.remove(0);
list.print()
console.log(list.size)