function isSymmetric(arr) {
               if (!Array.isArray(arr)) {
                              return false; // Non-arrays are non-symmetric
               }
               let reversed = arr.slice(0).reverse(); // Clone and reverse
               let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
               return equal;
}
module.exports = isSymmetric;

/**
const { expect } = require('chai');
const isSymmetric = require('./5.CheckOfSymmetry');


describe('happy path', () => {
               it('symmentric array with even count of numbers', () => {
                              expect(isSymmetric([1, 2, 2, 1])).to.be.true;
               });
               it('symmentric array with even count of numbers', () => {
                              expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
               });
               it('if it is not an array', () => {
                              expect(isSymmetric(1)).to.be.false;
                              expect(isSymmetric({ 1: 1 })).to.be.false;
                              expect(isSymmetric('asd')).to.be.false;

               });
               it('non-symmetric array return false', () => {
                              expect(isSymmetric([1, 2, 3, 1])).to.be.false;
               });
               it('it is symmetric array with even count of strings', () => {
                              expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
               });
               it('it is symmetric array with odd count of strings', () => {
                              expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
               });
               it('it is non-symmetric array with strings', () => {
                              expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
               });
               it('it is symmetric array with different types of dates', () => {
                              expect(isSymmetric([1, 2, 3, 2, '1'])).to.be.false;
               });
});
 */
