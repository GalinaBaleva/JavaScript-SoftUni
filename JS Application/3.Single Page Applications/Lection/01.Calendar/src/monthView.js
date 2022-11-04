const monthSections = document.querySelectorAll('.monthCalendar');
monthSections.forEach(s => s.remove())


export async function monthView(){
               document.getElementsByTagName('body')[0].replaceChildren(monthSections);
}