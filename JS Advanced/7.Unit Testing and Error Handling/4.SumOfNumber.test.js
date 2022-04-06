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

