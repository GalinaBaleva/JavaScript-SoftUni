(function arrayExtention() {
               Array.prototype.last = function () {
                              return this[this.length - 1]
               };
               Array.prototype.skip = function (n) {
                              let newArr = [];
                              for (let i = n; i < this.length; i++) {
                                             newArr.push(this[i]);
                              }
                              return newArr;
               }
               Array.prototype.take = function (n) {
                              let newArr = [];
                              for (let i = 0; i <= n; i++) {
                                             newArr.push(this[i]);
                              }
                              return newArr;
               }
               Array.prototype.sum = function () {
                              return this.reduce((a, b) => a + b);
               }
               Array.prototype.average = function () {
                              return this.sum() / this.length;
               }
})()

let arr = [1, 2, 3, 4,]
console.log(arr.average())