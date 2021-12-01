function solve() {
               let buttonOnScreen = document.querySelector('#container button');
               buttonOnScreen.addEventListener('click', onScreen);

               let buttonArchive = document.querySelector('#archive button');
               buttonArchive.addEventListener('click', archiveDeleting);

               function onScreen(ev) {
                              ev.preventDefault()
                              let [name, hall, ticketPrice] = document.querySelectorAll('#container input');
                              if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(ticketPrice.value)) {

                                             let onScreenSectionUlTag = document.querySelector('#movies ul');

                                             let liTag = document.createElement('li');

                                             let nameSpan = document.createElement('span');
                                             nameSpan.textContent = name.value;
                                             liTag.appendChild(nameSpan);

                                             let hallStrong = document.createElement('strong');
                                             hallStrong.textContent = `Hall: ${hall.value}`;
                                             liTag.appendChild(hallStrong);

                                             let divTag = document.createElement('div');
                                             let priceStrong = document.createElement('strong');
                                             priceStrong.textContent = Number(ticketPrice.value).toFixed(2);
                                             divTag.appendChild(priceStrong);

                                             let countOfTickets = document.createElement('input');
                                             countOfTickets.placeholder = 'Tickets Sold';
                                             divTag.appendChild(countOfTickets);

                                             let archivationButton = document.createElement('button');
                                             archivationButton.textContent = 'Archive';
                                             archivationButton.addEventListener('click', moveToArchive);
                                             divTag.appendChild(archivationButton);

                                             liTag.appendChild(divTag);
                                             onScreenSectionUlTag.appendChild(liTag);
                              };
                              name.value = '';
                              hall.value = '';
                              ticketPrice.value = '';

               };
               function moveToArchive(ev) {
                              let parent = ev.target.parentNode.parentNode;


                              let placeholderInfo = parent.querySelector('div input');
                              if (placeholderInfo.value !== '' && !isNaN(placeholderInfo.value)) {
                                             let ulArchiveSection = document.querySelector('#archive ul');


                                             let liTag = document.createElement('li');
                                             let nameOfFilm = document.createElement('span');
                                             nameOfFilm.textContent = parent.querySelector('span').textContent;

                                             liTag.appendChild(nameOfFilm);

                                             let totalAmount = document.createElement('strong');
                                             totalAmount.textContent = `Total amount: ${(Number(parent.querySelector('div strong').textContent) * Number(placeholderInfo.value)).toFixed(2)}`;
                                             liTag.appendChild(totalAmount);

                                             let deleteButton = document.createElement('button');
                                             deleteButton.textContent = 'Delete'
                                             deleteButton.addEventListener('click', deletingArticle);
                                             liTag.appendChild(deleteButton);

                                             ulArchiveSection.appendChild(liTag);

                                             parent.remove();
                              };

               };

               function deletingArticle(ev) {
                              let parent = ev.target.parentNode;

                              parent.remove();
               };

               function archiveDeleting(ev) {
                              let parent = ev.target.parentNode;

                              Array.from(parent.querySelector('ul').children).forEach(e => e.remove());
               };

};