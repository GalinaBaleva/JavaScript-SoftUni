function sum(arr) {
               let sum = 0;
               for (let num of arr) {
                              sum += Number(num);
               }
               return sum;
}
module.exports = sum;

/**
const { expect } = require('chai');
const sum = require('./4.SumOfNumbers');


describe('Sum Checker', () => {
               it('true if it is array', () => {
                              expect(sum([1, 1, 1,])).to.be.equal(3);
               });

               it('true if it is array with string numbers', () => {
                              expect(sum(['1', '1', '1',])).to.be.equal(3);
               });
});
 */
