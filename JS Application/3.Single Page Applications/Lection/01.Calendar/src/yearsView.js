const yearsSection = document.getElementById('years');
[...yearsSection.querySelectorAll('div')].forEach(year => year.addEventListener('click', showYear));
yearsSection.remove()

async function yearView(){
               document.getElementsByTagName('body')[0].replaceChildren(yearsSection);
}

function showYear (event){
               return event.target
}

export {
               yearView,
               showYear
}
