const yearsSection = document.getElementById('years');
yearsSection.remove()

export async function yearView(){
               document.getElementsByTagName('body')[0].replaceChildren(yearsSection);

               yearsSection.addEventListener('click', onClick);

}

function onClick(event){
               const tag = event.target;
               if(tag.tagName == 'DIV' && tag.className == 'data'){

               }
}