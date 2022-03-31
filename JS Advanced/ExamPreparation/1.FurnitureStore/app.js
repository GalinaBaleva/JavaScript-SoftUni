window.addEventListener('load', solve);

function solve() {
    //Tacking all fields from DOM
    let inputFields = Array.from(document.querySelectorAll('form input'));

    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', toFurnitureList);

    let furnitureList = document.querySelector('#furniture-list');
    let totalPrice = document.querySelector('.total-price');


    function toFurnitureList(e) {
        e.preventDefault()
        let [model, year, price] = inputFields.map(input => input.value.trim());
        let description = document.querySelector('#description');
        let descriptionInfo = description.value.trim();
        price = Number(price).toFixed(2)

        //  All fields must be filled
        //Check all fields, model and description non-empty strings
        //  Year and Price - positiv Numbers
        if (model == '' || year == '' || descriptionInfo == '' || price == '' || year < 0 || price < 0) {
            return;
        };
        let trInfo = document.createElement('tr');
        trInfo.classList = 'info';

        let tdName = document.createElement('td');
        tdName.textContent = model;
        let tdPrice = document.createElement('td');
        tdPrice.textContent = price;
        trInfo.appendChild(tdName);
        trInfo.appendChild(tdPrice);
        
        let tdButtons = document.createElement('td');
        let moreLessButton = document.createElement('button');
        moreLessButton.classList = 'moreBtn';
        moreLessButton.textContent = 'More Info';
        moreLessButton.addEventListener('click', moreInfo);
        let buyButton = document.createElement('button');
        buyButton.classList = 'buyBtn';
        buyButton.textContent = 'Buy it';
        buyButton.addEventListener('click', buyIt)

        tdButtons.appendChild(moreLessButton);
        tdButtons.appendChild(buyButton);
        trInfo.appendChild(tdButtons);
        
        
        let trHiden = document.createElement('tr');
        trHiden.classList = 'hide';
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;
        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan','3');
        tdDescription.textContent = `Description: ${descriptionInfo}`; 
        
        trHiden.appendChild(tdYear);
        trHiden.appendChild(tdDescription);
        furnitureList.appendChild(trInfo)
        furnitureList.appendChild(trHiden);

        inputFields.map(input => input.value = '');
        description.value = ''

    }
  function moreInfo(e){
      let parent = e.target.parentNode.parentNode.nextElementSibling;
      if(e.target.textContent ==  'More Info'){
          let val = "contents";
        e.target.textContent = `Less Info`;
        parent.style.display = 'contents';
      } else {
        e.target.textContent = `More Info`;
        parent.style.display = "none";
      };
  };

  function buyIt(e){
      let target = e.target.parentNode.parentNode;
      let parent = e.target.parentNode.parentNode.nextElementSibling;
      let price = target.querySelectorAll('td')[1].textContent;
    totalPrice.textContent = (Number(totalPrice.textContent)  + Number(price)).toFixed(2);
    
    target.remove();
    parent.remove();

  }

}

    //when add button is clicked, inputs fields muss be added to the table with ID and  with rownded Price
    //if more info is clicked, show the description and year and oposid
    //buy button is clicked, increasig total with this price;

    // let td = eClass('tr', { class: 'info' },
    //         eClass('td', {}, model),
    //         eClass('td', {}, price),
    //         eClass('td', {},
    //             eClass('button', { class: 'moreBtn' }, `Less info`),
    //             eClass('button', { class: 'buyBtn' }, `Buy it`)
    //         )
    //     );

    // function eClass(tagName, addClass, text) {
    //     let tag = document.createElement(tagName);
    
    //     for (let clas in addClass) {
    //         tag.className = addClass[clas]
    //     };
    //     for (let word of text) {
    //         word = document.createTextNode(word)
    //         tag.appendChild(word);
    //     };
    //     //tag.textContent = text;
    //     return tag;
    // }