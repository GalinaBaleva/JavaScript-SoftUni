function vacationBookList(input){
let booksPages = Number(input[0]);
let speadPagesHour = Number(input[1]);
let numberOfDays = Number(input[2]);

let totalHourPerBook = booksPages / speadPagesHour;
let totalHourPerDay = totalHourPerBook / numberOfDays;

console.log(totalHourPerDay);
}
vacationBookList(["212", "20", "2"])