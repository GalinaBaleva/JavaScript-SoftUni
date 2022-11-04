const daysSections = document.querySelectorAll('.daysCalendar');
daysSections.forEach(s => s.remove())


export async function daysView(){
               document.getElementsByTagName('body')[0].replaceChildren(daysSections);

}