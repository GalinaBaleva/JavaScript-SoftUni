// import { sectionsNavigation } from './util.js';
import { yearView, showYear } from './yearsView.js';
import { monthView } from './monthView.js'
import { daysView } from './daysView.js';



yearView();

const optionsView = {
               'yearsCalendar': yearView,
               'monthCalendar': monthView,
               'daysCalendar': daysView,
};

function onClick(event){
               console.log(event.target)
}



