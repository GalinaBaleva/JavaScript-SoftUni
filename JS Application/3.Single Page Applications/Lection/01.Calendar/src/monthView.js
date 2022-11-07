const monthSections = document.querySelectorAll('.monthCalendar');
// monthSections.forEach(month => {
//                const caption = month.querySelector('caption').addEventListener('click', viewYear);
// });
monthSections.forEach(s => s.remove())


export async function monthView(){
               document.getElementsByTagName('body')[0].replaceChildren(monthSections);
}

// function viewYear(event){
//                console.log(event.target);
// }