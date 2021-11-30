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
                              }
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
               
               function deletingArticle(ev){
                              let parent = ev.target.parentNode;

                              parent.remove();
               }

               function archiveDeleting(ev) {
                              let parent = ev.target.parentNode;

                              Array.from(parent.querySelector('ul').children).forEach(e => e.remove());
               }

};

// function solve() {
//     //1 Select elements
//     let onScreenButton = document.querySelector('#container button');
//     //2a attach event listener on [On-Screen] button
//     onScreenButton.addEventListener('click', onScreenHandler);
//     let clearArchiveButton = document.querySelector('#archive > button');
//     //5a add clear button event listener
//     clearArchiveButton.addEventListener('click', clearArchive);

//     //2. Implement Add movie functionality
//     function onScreenHandler(e) {
//         e.preventDefault();
//         //2b Get input values for movie
//         let movieInputs = document.querySelectorAll('#container input');
//         let nameInput = movieInputs[0];
//         let hallInput = movieInputs[1];
//         let priceInput = movieInputs[2];

//         //2c convert values where needed
//         let name = nameInput.value;
//         let hall = hallInput.value;
//         let price = priceInput.value

//         // check inputs
//         if (name.trim() !== '' &&
//             hall.trim() !== '' &&
//             price.trim() !== '' &&
//             !isNaN(Number(price))) {

//             price = Number(price).toFixed(2);
//             //2d create html structure for movie
//             let li = document.createElement('li');

//             let nameSpan = document.createElement('span');
//             nameSpan.textContent = name;

//             let hallStrong = document.createElement('strong');
//             hallStrong.textContent = `Hall: ${hall}`;

//             let rightSectionDiv = document.createElement('div');
//             let priceStrong = document.createElement('strong');
//             priceStrong.textContent = price;

//             let ticketsSoldInput = document.createElement('input');
//             ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

//             let archiveButton = document.createElement('button');
//             archiveButton.textContent = 'Archive';
//             //3a Attach event listener each movie's archive button
//             archiveButton.addEventListener('click', archiveMovie);

//             rightSectionDiv.appendChild(priceStrong);
//             rightSectionDiv.appendChild(ticketsSoldInput);
//             rightSectionDiv.appendChild(archiveButton);

//             li.appendChild(nameSpan);
//             li.appendChild(hallStrong);
//             li.appendChild(rightSectionDiv);

//             //2e attach Html structure to movies on screen section
//             let moviesUl = document.querySelector('#movies ul');
//             moviesUl.appendChild(li);

//             nameInput.value = '';
//             hallInput.value = '';
//             priceInput.value = '';
//         }
//     }

//     //3. Implement Archive movie functionality
//     function archiveMovie(e) {
//         //3b Get input values for current movie to archive
//         let movieLi = e.target.parentElement.parentElement;
//         let ticketsSoldInput = movieLi.querySelector('div input');
//         let ticketsSold = ticketsSoldInput.value;

//         if (ticketsSold.trim() !== '' &&
//             !isNaN(Number(ticketsSold))) {
//             //3c convert values where needed
//             ticketsSold = Number(ticketsSold);
//             let priceStrong = movieLi.querySelector('div strong');
//             let price = Number(priceStrong.textContent);

//             //3d create html structure for archived movie
//             let hallStrong = movieLi.querySelector('strong');
//             let totalPrice = price * ticketsSold;
//             hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

//             let rightDiv = movieLi.querySelector('div');
//             rightDiv.remove();

//             let deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             //4a Attach event listener each movie's delete button
//             deleteButton.addEventListener('click', deleteFromArchive);
//             movieLi.appendChild(deleteButton);

//             //3e attach Html structure to movies archive section
//             let archiveUl = document.querySelector('#archive ul');
//             archiveUl.appendChild(movieLi);
//         }
//     }


//     //4. Implement archived movie's delete functionality
//     function deleteFromArchive(e) {
//         let currentElement = e.target;
//         let movieLi = currentElement.parentElement;
//         //4b delete Html structure of a deleted movies from dom
//         movieLi.remove();
//     }

//     //5 implement archive clear button functionality
//     function clearArchive() {
//         //5a delete archive's LI elements from DOM
//         let archiveLis = Array.from(document.querySelectorAll('#archive ul li'));
//         archiveLis.forEach(el => el.remove());
//     }

// }