const { expect } = require('chai');
const cinema = require('./cinema');

describe('cinema', function () {
               describe('showMovies', function () {
                              it('return message if length of arr is 0', function () {
                                             expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
                              });
                              it('should return joined array if length of array is bigger than 0', function () {
                                             expect(cinema.showMovies(['First movie', 'Second Movie', 'Thert Movie'])).to.be.equal(`First movie, Second Movie, Thert Movie`)
                                             expect(cinema.showMovies(['First movie'])).to.be.equal(`First movie`)
                              });
               });
               describe('ticketPrice', function () {
                              it('throw an Error if projectionType is not defined', function () {
                                             expect(() => (cinema.ticketPrice(1))).to.throw(Error, `Invalid projection type.`)
                                             expect(() => (cinema.ticketPrice([]))).to.throw(Error, `Invalid projection type.`)
                                             expect(() => (cinema.ticketPrice('NotExist'))).to.throw(Error, `Invalid projection type.`)
                              });
                              it('should return the price if correct projectionType is passed', function () {
                                             expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
                                             expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
                                             expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);

                              });

               });
               describe('swapSeatsInHall', function () {
                              it('return an Error if fell one of the inputs', function () {
                                             expect(cinema.swapSeatsInHall(3)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                              });
                              it('return Error if the input type is not valid', function () {
                                             expect(cinema.swapSeatsInHall(1, '2')).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall('1', '2')).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall('1', 1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(undefined, 2)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1, undefined)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1, true)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(true,)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(NaN, 1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall([1], 2)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(0, 1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1, 0)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(-5, 1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1, -1)).to.be.equal(`Unsuccessful change of seats in the hall.`);


                              });
                              it('return Error message if seats are biger than 20', function () {
                                             expect(cinema.swapSeatsInHall(21, 2)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(1, 21)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                              });
                              it('return Error message if seats are the same numbers', function () {
                                             expect(cinema.swapSeatsInHall(1, 1)).to.be.equal(`Unsuccessful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(2, 2)).to.be.equal(`Unsuccessful change of seats in the hall.`);

                              });
                              it('happy path if type of inputs are numbers', function () {
                                             expect(cinema.swapSeatsInHall(1, 2)).to.be.equal(`Successful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(2, 3)).to.be.equal(`Successful change of seats in the hall.`);

                              });
                              it('happy path if the seats numbers are >= 20', function () {
                                             expect(cinema.swapSeatsInHall(1, 20)).to.be.equal(`Successful change of seats in the hall.`);
                                             expect(cinema.swapSeatsInHall(20, 1)).to.be.equal(`Successful change of seats in the hall.`);

                              });
                              // it('', function () {
                              //                expect(cinema.swapSeatsInHall()).to.be.equal(`Successful change of seats in the hall.`);
                              //                expect(cinema.swapSeatsInHall()).to.be.equal(`Successful change of seats in the hall.`);

                              // });
                              // it('', function () {
                              //                expect(cinema.swapSeatsInHall()).to.be.equal(`Successful change of seats in the hall.`);
                              //                expect(cinema.swapSeatsInHall()).to.be.equal(`Successful change of seats in the hall.`);

                              // });
               });

});