function create(words) {
   const contentDiv = document.getElementById('content');
   const eventListener = contentDiv.addEventListener('click', onClick);

   for (let word of words) {
      const newDivElement = document.createElement('div');
      const newParagraf = document.createElement('p');
      newParagraf.textContent = word;
      newParagraf.style.display = 'none'

      newDivElement.appendChild(newParagraf);
      contentDiv.appendChild(newDivElement)
   }

   function onClick(ev) {
      
      const sectionStyle = ev.target.firstChild;
      sectionStyle.style.display = '';
   }
}