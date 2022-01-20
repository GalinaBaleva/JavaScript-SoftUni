const { expect } = require('chai');
const evenOrOdd = require('./2.EvenorOdd');

describe('oddOrEvenString', () => {
               it('not a string', () => {
                              expect(evenOrOdd(1)).to.be.undefined;
                              expect(evenOrOdd([134])).to.be.undefined;
                              expect(evenOrOdd({})).to.be.undefined;
               });
               it('string with odd length', () => {
                              expect(evenOrOdd('GfT')).to.be.equal('odd');
                              expect(evenOrOdd('gFg')).to.be.equal('odd');
               });
               it('string with even length', () => {
                              expect(evenOrOdd('fJfk')).to.be.equal('even');
                              expect(evenOrOdd('FJfY')).to.be.equal('even');
                              expect(evenOrOdd('')).to.be.equal('even');
                              expect(evenOrOdd()).to.be.equal('even');
               })
})