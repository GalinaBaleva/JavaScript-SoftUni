class Movie {
               constructor(movieName, ticketPrice) {
                              this.movieName = movieName;
                              this.ticketPrice = Number(ticketPrice);
                              this.screenings = [];

                              this._totalProfit = 0;
                              this._totalSoldTick = 0;
               }
               newScreening(date, hall, desrtiption) {
                              if (this.screenings.some(scr => scr.date == date && scr.hall == hall)) {
                                             throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
                              }
                              this.screenings.push({
                                             date,
                                             hall,
                                             desrtiption
                              })
                              return `New screening of ${this.movieName} is added.`

               }
               endScreening(date, hall, soldedTickets) {
                              if (this.screenings.find(scr => scr.date == date && scr.hall == hall) == undefined) {
                                             throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
                              }

                              let currentProfit = this.ticketPrice * soldedTickets;
                              this._totalProfit += currentProfit;
                              this._totalSoldTick += soldedTickets;

                              let screeningToRemove = this.screenings.find(scr => scr.date == date && scr.hall == hall);
                              let index = this.screenings.indexOf(screeningToRemove)
                              this.screenings.splice(index, 1);

                              //let index = this.screenings.findIndex(scr => scr.date == date && scr.hall == hall);
                              //this.screenings.splice(index, 1);

                              return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`

               }
               toString() {
                              let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

                              let result = [];

                              result.push(`${this.movieName} full information:`);
                              result.push(`Total profit: ${this._totalProfit.toFixed()}$`);
                              result.push(`Sold Tickets: ${this._totalSoldTick.toFixed()}`);
                              if (this.screenings.length <= 0) {
                                             result.push(`No more screenings!`);
                              } else {
                                             result.push(`Remaining film screenings:`);
                                             for (let screening of sorted) {
                                                            result.push(`${screening.hall} - ${screening.date} - ${screening.desrtiption}`)
                                             };
                              }

                              return result.join(`\n`)

               }
}
let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October2,2020', 'IMAX3D', `3D`));   //New screening of Wonder Woman 1984 is added.
console.log(m.newScreening('October2,2020', 'IMAX3D', `3D`));
console.log(m.newScreening('October3,2020', 'Main', `regular`));   //New screening of Wonder Woman 1984 is added.
console.log(m.newScreening('October4,2020', 'IMAX3D', `3D`));   //New screening of Wonder Woman 1984 is added.
console.log(m.endScreening('October2,2020', 'IMAX3D', 150));   //Wonder Woman 1984 movie screening on October 2, 2020 in IMAX 3D hall has ended. Screening profit: 1500
console.log(m.endScreening('October3,2020', 'Main', 78));   //Wonder Woman 1984 movie screening on October 3, 2020 in Main hall has ended. Screening profit: 780
console.log(m.toString());   //Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// IMAX 3D - October 4, 2020 - 3D

m.newScreening('October4,2020', '235', `regular`);   //
m.newScreening('October5,2020', 'Main', `regular`);   //
m.newScreening('October3,2020', '235', `regular`);   //
m.newScreening('October4,2020', 'Main', `regular`);   //
console.log(m.toString());
/*Wonder Woman 1984 full information:
Total profit: 2280$
Sold Tickets: 228
Remaining film screenings:
235 - October 4, 2020 - regular
235 - October 3, 2020 - regular
IMAX 3D - October 4, 2020 - 3D
Main - October 5, 2020 - regular
Main - October 4, 2020 - regular*/

console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150))
console.log(m.endScreening('October 3, 2020', 'Main', 78))