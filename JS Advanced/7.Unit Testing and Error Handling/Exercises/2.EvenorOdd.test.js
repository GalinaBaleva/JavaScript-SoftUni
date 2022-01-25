const { expect } = require('chai');
const isOddOrEven = require('./2.EvenorOdd');

describe('oddOrEvenString', () => {
               it('not a string', () => {
                              expect(isOddOrEven(1)).to.be.undefined;
                              expect(isOddOrEven(134)).to.be.undefined;
               });
               it('string with odd length', () => {
                              expect(isOddOrEven('GfT')).to.be.equal('odd');
                              expect(isOddOrEven('gFg')).to.be.equal('odd');
                              expect(isOddOrEven('FFF')).to.be.equal('odd');
                              expect(isOddOrEven('aaa')).to.be.equal('odd');
               });
               it('string with even length', () => {
                              expect(isOddOrEven('fJfk')).to.be.equal('even');
                              expect(isOddOrEven('FJfY')).to.be.equal('even');
                              expect(isOddOrEven('FFFF')).to.be.equal('even');
                              expect(isOddOrEven('aaaa')).to.be.equal('even');
               })
})