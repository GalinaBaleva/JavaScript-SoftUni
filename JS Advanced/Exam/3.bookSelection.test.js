const { expect } = require('chai');
const bookSelection = require('./bookSelection');


describe('bookSection', () => {
               describe('isGenreSuitable', () => {
                              it('return error if age and gender are with uncorrect values', function () {
                                             expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
                                             expect(bookSelection.isGenreSuitable('Thriller', 11)).to.be.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
                                             expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
                                             expect(bookSelection.isGenreSuitable('Horror', 11)).to.be.equal(`Books with Horror genre are not suitable for kids at 11 age`);

                              });
                              it('if inputs are walid', () => {
                                             expect(bookSelection.isGenreSuitable('Animacion', 13)).to.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Comedi', 12)).to.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Comedi', 5)).to.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Horror', 45)).to.be.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal(`Those books are suitable`);
                                             expect(bookSelection.isGenreSuitable('Thriller', 45)).to.be.equal(`Those books are suitable`);


                              })
               });
               describe('isItAffordable', () => {
                              it('should throw error if non-string type is passed', () => {
                                             expect(() => (bookSelection.isItAffordable('string', 'string'))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.isItAffordable('string', 1))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.isItAffordable(1, 'string'))).to.throw(Error, `Invalid input`);
                              })
                              it('should throw error if non-string type is passed - undefined', () => {
                                             expect(() => (bookSelection.isItAffordable(undefined, undefined))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.isItAffordable(undefined, 1))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.isItAffordable(1, undefined))).to.throw(Error, `Invalid input`);
                              })
                              // it('should throw error if non-string type is passed - null', () => {
                              //                expect(() => (bookSelection.isItAffordable(null, null))).to.throw(Error, `Invalid input`);
                              //                expect(() => (bookSelection.isItAffordable(null, 1))).to.throw(Error, `Invalid input`);
                              //                expect(() => (bookSelection.isItAffordable(1, null))).to.throw(Error, `Invalid input`);
                              //                expect(() => (bookSelection.isItAffordable(NaN, NaN))).to.throw(Error, `Invalid input`);
                              // })
                              // it('should throw error if non-string type is passed - Nan', () => {
                              //                expect(() => (bookSelection.isItAffordable(NaN, 1))).to.throw(Error, `Invalid input`);
                              //                expect(() => (bookSelection.isItAffordable(1, Nan))).to.throw(Error, `Invalid input`);
                              // }
                              //);
                              it('if budget is less then price', () => {
                                             expect(bookSelection.isItAffordable(2, 1)).to.be.equal(`You don't have enough money`);
                                             expect(bookSelection.isItAffordable(5, 3)).to.be.equal(`You don't have enough money`);
                                             expect(bookSelection.isItAffordable(5, 4)).to.be.equal(`You don't have enough money`);
                              });
                              it('if buget is bigger then price', () => {
                                             expect(bookSelection.isItAffordable(5, 5)).to.be.equal(`Book bought. You have 0$ left`);
                                             expect(bookSelection.isItAffordable(5, 6)).to.be.equal(`Book bought. You have 1$ left`);
                                             expect(bookSelection.isItAffordable(1, 1)).to.be.equal(`Book bought. You have 0$ left`);
                                             expect(bookSelection.isItAffordable(1, 2)).to.be.equal(`Book bought. You have 1$ left`);


                              })
               });
               describe('suitableTitles', () => {
                              it('should throw an error if inputs are not array and string', () => {
                                             expect(() => (bookSelection.suitableTitles('string', []))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles(undefined, []))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles(null, undefined))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles(undefined, 'string'))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles(['string'], []))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles(['string'], undefined))).to.throw(Error, `Invalid input`);
                                             expect(() => (bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], null))).to.throw(Error, `Invalid input`);
                              });
                              it('if correct inpust are passed', () => {
                                             expect(bookSelection.suitableTitles([{ title: 'The Da Vince', genre: 'Thriller' }], 'Thriller')).to.deep.equal(['The Da Vince']);
                                             expect(bookSelection.suitableTitles([{ title: 'The Da Vince', genre: 'Thriller' }], 'commedy')).to.deep.equal([]);

                                             
                              });
                              // it('', () => {
                              //                expect().to.be.equal();

                              // })
               });
               


});