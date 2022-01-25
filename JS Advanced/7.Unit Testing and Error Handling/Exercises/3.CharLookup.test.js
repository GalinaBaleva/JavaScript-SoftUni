const { expect } = require('chai');
const lookupChar = require('./3.CharLookup');

describe('cheking character', () => {
               it('string input is not a strin', () => {
                              expect(lookupChar(1, 1)).to.be.undefined;
                              expect(lookupChar([], 1)).to.be.undefined;
                              expect(lookupChar({}, 1)).to.be.undefined;
               });
               it('index from input is not a integer', () => {
                              expect(lookupChar('1', '1')).to.be.be.undefined;
                              expect(lookupChar('1', 1.1)).to.be.be.undefined;
                              expect(lookupChar('1', [])).to.be.undefined;
                              expect(lookupChar('1', {})).to.be.undefined;
               });
               it('index from input is not in a length border', () => {
                              expect(lookupChar('abc', -1)).to.be.equal("Incorrect index");
                              expect(lookupChar('abc', 3)).to.be.equal("Incorrect index");
               });
               it('both input are write', () => {
                              expect(lookupChar('char', 1)).to.be.equal('h');
               })
})
