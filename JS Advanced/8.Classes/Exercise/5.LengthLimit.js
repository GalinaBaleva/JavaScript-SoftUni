class Stringer {
               constructor(string, number) {
                              this.innerString = string;
                              this.innerLength = number;
               }

               increase(length){
                              this.innerLength = this.innerLength + length;
               };
               decrease (length){
                              this.innerLength = this.innerLength - length;
                              if(this.innerLength < 0){
                                             this.innerLength = 0;
                              };
               };
               toString(){
                              if(this.innerLength >= this.innerString.length){
                                             return `${this.innerString}`;
                              } else if (this.innerLength == 0){
                                             return `...`;
                              } else {
                                             let result = this.innerString.length - this.innerLength
                                             return `${this.innerString.slice(0, result)}...`
                              }
               }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test